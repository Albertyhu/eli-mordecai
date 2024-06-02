//This method handles the search query that is typed into the search bar
import type { PostType } from "@/util/interface.tsx";
//import * as fs from "@astrojs/node";

export const SearchQuery = (query: string, list: Array<PostType>) => {
  const lowercase_query = query.toLowerCase().trim();
  return list.filter((item: PostType) =>
    SearchFrontmatter(lowercase_query, item)
  );
};

const SearchFrontmatter = async (
  query: string,
  post: PostType
): Promise<boolean> => {
  const author = post.frontmatter.author.toLowerCase().trim();
  if (author.includes(query)) {
    return true;
  }
  const title = post.frontmatter.title.toLowerCase().trim();
  if (title.includes(query)) {
    return true;
  }
  const description = post.frontmatter.excerpt?.toLowerCase().trim();
  if (description?.includes(query)) {
    return true;
  }

  // let body = await fs.readFile(post.frontmatter.file).toString();
  // if (body?.includes(query)) {
  //   return true;
  // }
  return false;
};
