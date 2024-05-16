import type {
  formattedPostType,
  PostType,
  CreateStaticPathArrayType,
  TagStaticPathArrayType,
  PathArray_TagsAndPageType,
  PostAssetType,
  authorType,
} from "@/util/interface";

import { makeURLfriendly } from "./string_hooks.tsx";

//This function creates and returns an array containing posts to be displayed based on the page number
const getPaginatedArray = (
  allPosts: Array<PostType> | undefined,
  currentPage: number,
  pageSize: number
): Array<PostType> => {
  return (
    allPosts?.slice((currentPage - 1) * pageSize, pageSize * currentPage) || []
  );
};

//This function creates and returns the array necessary for getStaticPaths
const createStaticPathArray = ({
  allPosts,
  PAGE_SIZE,
  totalPages,
  assets,
}: CreateStaticPathArrayType): Array<any> => {
  var staticPaths: Array<any> = [];
  var i = 1;
  var assetMap = new Map();
  const sortedPosts = SortPostsByNew(allPosts);
  do {
    //acquire array of blog posts to be displayed by each page, limited by PAGE_SIZE
    //the variable i is the current page
    var paginatedArray = getPaginatedArray(sortedPosts, i, PAGE_SIZE);

    var path = {
      params: { page: i },
      props: {
        totalPages,
        assets,
        paginatedArray,
        totalPosts: allPosts.length,
        PAGE_SIZE,
      },
    };
    //console.log("paginatedArray: ", paginatedArray)
    staticPaths.push(path);
    i++;
  } while (i <= totalPages);
  return staticPaths;
};

const createStaticPathArrayForTagsAndPage = ({
  allPosts,
  assets,
  PAGE_SIZE,
}: TagStaticPathArrayType): Array<any> => {
  //Get all tags
  var allTags = allPosts
    .map((post: any) => post.frontmatter.tags)
    .flat()
    .map((item) => item.tag);
  //Get rid of redundant tags
  const uniqueTags: Array<string> = [...new Set(allTags)];
  //initialize array
  var staticPaths: Array<PathArray_TagsAndPageType> = [];

  uniqueTags.forEach((unique_tag: string) => {
    //find posts that contains the tag
    var filteredPosts = allPosts.filter((post: any) =>
      post.frontmatter.tags?.some(
        (item: { tag: string }) => item.tag === unique_tag
      )
    );
    const sortedPosts = SortPostsByNew(filteredPosts);
    var totalPages: number = Math.ceil(sortedPosts.length / PAGE_SIZE);
    var i = 0;
    var assetMap = new Map();
    do {
      var paginatedArray: Array<PostType> = getPaginatedArray(
        sortedPosts,
        i,
        PAGE_SIZE
      );
      paginatedArray = hydratePaginatedPostArray(
        paginatedArray,
        assetMap,
        assets
      );
      var path = {
        params: {
          tag: makeURLfriendly(unique_tag),
          page: i,
        },
        props: {
          totalPages,
          paginatedArray,
          totalPosts: sortedPosts.length,
          PAGE_SIZE,
        },
      };
      staticPaths.push(path);
      i++;
    } while (i <= totalPages);
  });

  return staticPaths;
};

//Sorts all posts by descending date
const SortPostsByNew = (AllPosts: Array<PostType>): Array<PostType> => {
  var sortedPosts = [...AllPosts];
  sortedPosts.sort((a: PostType, b: PostType) => {
    return (
      (new Date(b.frontmatter.pubDate) as any) -
      (new Date(a.frontmatter.pubDate) as any)
    );
  });
  return sortedPosts;
};

const createStaticPathArrayForTags = ({
  allPosts,
  PAGE_SIZE,
}: TagStaticPathArrayType): Array<any> => {
  var allTags = allPosts
    .map((post: any) => post.frontmatter.tags)
    .flat()
    .map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags.map((unique_tag: string) => {
    var filteredPosts = allPosts.filter((post: any) =>
      post.frontmatter.tags?.some(
        (item: { tag: string }) => item.tag === unique_tag
      )
    );
    var totalPages: number = Math.ceil(filteredPosts.length / PAGE_SIZE);
    return {
      params: {
        tag: makeURLfriendly(unique_tag),
      },
      props: {
        totalPages,
        filteredPosts,
      },
    };
  });
};

//This function is used when rendering a single blog post
//main_feature is the pathway of the main image of the blog post
//recent_posts is an array of recent posts in their formmatted version
//function needs to loop one time
//returns object containing the featured images on all posts to be displayed
const setBlogPostImages = (
  assets: Array<any>,
  main_feature?: string,
  recent_posts?: Array<formattedPostType>
) => {
  var formattedName: string = "";
  var payload: {
    main_featured_image: string | HTMLImageElement | null;
    recentPosts: Array<formattedPostType>;
  } = {
    main_featured_image: null,
    recentPosts: [],
  };
  if (main_feature) {
    formattedName = getImageFileName(main_feature);
  }
  for (var i = 0; i < assets.length; i++) {
    var assetFileName = getImageFileName(assets[i].default.src);
    if (assetFileName === formattedName) {
      payload["main_featured_image"] = assets[i].default.src;
    }
    if (recent_posts) {
      var foundPost = recent_posts.find(
        (val) => val.featured_image === assetFileName
      );
      if (foundPost) {
        var formattedFountPost = {
          ...foundPost,
          featured_image: assets[i].default.src,
        };
        payload.recentPosts.push(formattedFountPost);
      }
    }

    //break point
    if (
      main_feature &&
      main_feature != "" &&
      payload.main_featured_image != null &&
      recent_posts?.length === payload.recentPosts.length
    ) {
      return payload;
    }
  }
  return payload;
};

//This function extracts the file name from the file path excluding the extension
//For example, './src/asset/uploads.sample.jpg' becomes 'sample'
const getImageFileName = (imageFile: string) => {
  var pathArray = imageFile.split("/");
  var fileName = pathArray[pathArray.length - 1];
  var fileNameArray = fileName.split(".");
  return fileNameArray[0];
};

//This retrieves the image data for each post
//The map object assetMap is used to reduce the need to go through redundant loops
//This is not pure function because it mutates the argument assetMap
//5-10-24: this is no longer needed
const hydratePaginatedPostArray = (
  paginatedArray: Array<PostType>,
  assetMap: Map<string, any>,
  assets: Array<PostAssetType>
) => {
  var hydratedArray = paginatedArray.map((item) => {
    if (item.frontmatter.featured_image) {
      var featured_image = null;
      var fileName = getImageFileName(item.frontmatter.featured_image);
      if (assetMap.get(fileName)) {
        featured_image = assetMap.get(fileName);
      } else {
        var foundAsset = assets.find((asset) => {
          var found: boolean = asset.default.src.includes(fileName);
          if (found) {
            assetMap.set(fileName, asset.default.src);
          }
          return found;
        });
        featured_image = foundAsset?.default.src;
      }
    }
    if (featured_image) {
      return {
        ...item,
        featured_image,
      };
    }
    return item;
  });
  return hydratedArray;
};

//Creates a static path array for the paginated author page
const createStaticPathArrayForAuthors = ({
  allPosts,
  PAGE_SIZE,
  assets,
}: {
  allPosts: Array<PostType>;
  PAGE_SIZE: number;
  assets: Array<PostAssetType>;
}) => {
  var staticPaths: Array<any> = [];
  var authorMap: Map<string, Array<PostType>> = new Map();
  //Array of all authors
  const uniqueAuthors: Array<string> = [
    ...new Set(
      allPosts.map((post) => {
        if (authorMap.has(post.frontmatter.author)) {
          var tempArr: Array<PostType> | undefined = authorMap.get(
            post.frontmatter.author
          )
            ? authorMap.get(post.frontmatter.author)
            : [];
          tempArr?.push(post);
          if (tempArr !== undefined)
            authorMap.set(post.frontmatter.author, tempArr);
        } else {
          authorMap.set(post.frontmatter.author, [post]);
        }
        return post.frontmatter.author;
      })
    ),
  ];
  uniqueAuthors.forEach((author) => {
    var i = 1;
    var postsArr = authorMap.get(author);
    var totalPages: number =
      postsArr !== undefined
        ? postsArr?.length / PAGE_SIZE + (postsArr?.length % PAGE_SIZE ? 1 : 0)
        : 0;
    do {
      //acquire array of blog posts to be displayed by each page, limited by PAGE_SIZE
      var paginatedArray = getPaginatedArray(postsArr, i, PAGE_SIZE);

      var path = {
        params: {
          name: author,
          page: i,
        },
        props: {
          totalPages,
          assets,
          paginatedArray,
          totalPosts: postsArr?.length,
          PAGE_SIZE,
        },
      };
      staticPaths.push(path);
      i++;
    } while (i <= totalPages);
  });

  return staticPaths;
};

const filterPostsByAuthor = (
  author: string,
  allPosts: Array<PostType>
): Array<PostType> | [] => {
  try {
    const filtered = allPosts.filter(
      (post) => author.toLowerCase() === post.frontmatter.author.toLowerCase()
    );
    return filtered;
  } catch (e) {
    console.log("filterPostsByAuthor error: ", e);
    return [];
  }
};

const getAuthorInfoFromArray = (
  author: string,
  authorArray: Array<authorType>
): authorType | undefined | null => {
  console.log("authorArray: ", authorArray);
  try {
    return authorArray.find(
      (val) => val.frontmatter.author.toLowerCase() === author.toLowerCase()
    );
  } catch (e) {
    console.log("getAuthorInfoFromArray error: ", e);
    return null;
  }
};

const GetTheMostRecentBlogs = (size: number, AllPosts: Array<PostType>) => {
  try {
    let sortedBlogs = SortPostsByNew(AllPosts);
    return sortedBlogs.slice(0, size);
  } catch (e) {
    console.log("GetTheMostRecentBlog error: ", e);
    return [];
  }
};

export {
  getPaginatedArray,
  createStaticPathArray,
  createStaticPathArrayForTagsAndPage,
  createStaticPathArrayForTags,
  setBlogPostImages,
  getImageFileName,
  hydratePaginatedPostArray,
  createStaticPathArrayForAuthors,
  filterPostsByAuthor,
  getAuthorInfoFromArray,
  GetTheMostRecentBlogs,
};
