/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent } from '../astro_Dvw0weLc.mjs';
import 'kleur/colors';
import { g as getPaginatedArray, a as $$Index$1, b as $$BaseLayout } from './How to Tell Who Is at Fault in a Car Accident_BFJPptDl.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import uuid from 'react-uuid';
/* empty css                           */
import 'clsx';
import { useState, useRef, useEffect } from 'react';
/* empty css                                 */

const $$Astro$4 = createAstro();
const $$BannerTitleSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BannerTitleSeparator;
  const {
    customStyle = "w-[95px] h-[44px]"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img src="/assets/icons/banner-title-separator.svg" loading="lazy" alt="Title Large Separator" decoding="async"${addAttribute(`${customStyle}`, "class")}>`;
}, "D:/Astro/eli-mordecai/src/components/graphics/banner-title-separator.astro", void 0);

const $$Astro$3 = createAstro();
const $$PreviewPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PreviewPanel;
  const {
    pubDate,
    category,
    title,
    url,
    excerpt,
    featured_image,
    phoneImg,
    mediumTabImg,
    tabletImg,
    altText = "Blog Image"
  } = Astro2.props;
  const category_url = category.replace(" ", "-").toLowerCase();
  return renderTemplate`${maybeRenderHead()}<div role="listitem" class="w-dyn-item w-col w-col-4"> <div class="blog-item"> <a${addAttribute(url, "href")} class="w-inline-block cursor-pointer"> <img${addAttribute(featured_image, "src")} loading="lazy"${addAttribute(altText, "alt")} sizes="(max-width: 479px) 83vw, (max-width: 767px) 87vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, (max-width: 1439px) 31vw, (max-width: 1919px) 440px, 453.328125px"${addAttribute(`
                    ${phoneImg ? phoneImg + " 500w," : ""}
                    ${mediumTabImg ? mediumTabImg + " 800w," : ""}
                    ${tabletImg ? tabletImg + " 1080w," : ""}
                    ${featured_image} 1200w
                `, "srcset")}> </a> <div class="blog-meta-wrap"> <div class="law-type-wrap"> <a${addAttribute(`/blog/category/${category_url}/1`, "href")} class="blog-law-type cursor-pointer">${category}</a> </div> <div class="meta-separator"><p class="meta-separator-line">|</p></div> <div class="date-wrap"><p class="published-date">${pubDate}</p></div> </div> <div class="blog-content-area"> <a${addAttribute(url, "href")} class="blog-title-link cursor-pointer">${title}</a> ${excerpt && renderTemplate`<p class="blog-excerpt">${excerpt}</p>`} </div> <div class="blog-viewmore-wrap"> <a${addAttribute(url, "href")} class="viewmore-link cursor-pointer">View More</a> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/blogComponent/preview-panel.astro", void 0);

const DOTS = '...';

function usePagination({
  currentPage,
  totalCount,
  pageSize
}) {
  const consecPage = 1;
  const createRange = (first, last) => {
    var pageRange = [];
    for (var i = first; i <= last; i++) {
      pageRange.push(i);
    }
    return pageRange;
  };
  const Pagination = () => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const firstPage = 1;
    if (totalPages < consecPage + 5) {
      const range = createRange(firstPage, totalPages);
      return [...range];
    }
    var leftMostPage = 0;
    var rightMostPage = 0;
    var addLeftPage = 0;
    var addRightPage = 0;
    if (currentPage - consecPage - 2 > 0) {
      leftMostPage = currentPage - consecPage;
    } else {
      leftMostPage = firstPage;
      addRightPage = consecPage - (currentPage - 2);
    }
    if (currentPage + consecPage + 1 < totalPages) {
      rightMostPage = currentPage + consecPage;
    } else {
      rightMostPage = totalPages;
      addLeftPage = consecPage - (totalPages - currentPage - 1);
    }
    if (leftMostPage !== firstPage) {
      leftMostPage -= addLeftPage;
    }
    if (rightMostPage !== totalPages) {
      rightMostPage += addRightPage;
    }
    const displayLeftDots = currentPage - consecPage - 1 > 1 ? true : false;
    const displayRightDots = currentPage + consecPage + 1 < totalPages ? true : false;
    const midRange = createRange(leftMostPage, rightMostPage);
    if (displayLeftDots && displayRightDots) {
      return [firstPage, DOTS, ...midRange, DOTS, totalPages];
    }
    if (!displayLeftDots && displayRightDots) {
      return [...midRange, DOTS, totalPages];
    }
    if (displayLeftDots && !displayRightDots) {
      return [firstPage, DOTS, ...midRange];
    }
  };
  return Pagination();
}

const RenderPagination = (props) => {
  const {
    pageSize,
    totalCount,
    currentPage,
    totalPages,
    isMobile,
    search_query
  } = props;
  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      if (search_query != null && typeof search_query != void 0) {
        return window.location.href = `/blog/search/${search_query}/${newPage}`;
      }
      return window.location.href = `/blog/${newPage}`;
    }
  };
  const Pagination = usePagination({ currentPage, totalCount, pageSize });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "PaginationContainer",
      className: `my-10 list-none text-center ${isMobile ? "md:hidden" : "block"} [&>li]:cursor-pointer`,
      children: [
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "leftArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => onPageChange(currentPage - 1),
            children: "˂ Prev"
          }
        ),
        Pagination?.map((page) => {
          const uniqueKey = uuid();
          if (page === DOTS) {
            return /* @__PURE__ */ jsx("li", { className: "PaginatedListItem text-white", children: "…" }, uniqueKey);
          }
          if (page === currentPage) {
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "selected PaginatedListItem !text-primaryC",
                onClick: () => onPageChange(page),
                children: page
              },
              uniqueKey
            );
          }
          return /* @__PURE__ */ jsx(
            "li",
            {
              className: "PaginatedListItem",
              onClick: () => onPageChange(page),
              children: page
            },
            uniqueKey
          );
        }),
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "rightArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => {
              onPageChange(currentPage + 1);
            },
            children: "Next ˃"
          }
        )
      ]
    }
  );
};

const RenderRecentSearch = (props) => {
  const { setQuery, historyResults, setSearchHistory } = props;
  return /* @__PURE__ */ jsx("div", { className: "w-full h-fit py-10 bg-white z-10 mt-5", id: "HistoryResults", children: /* @__PURE__ */ jsxs("div", { className: "w-11/12 lg:w-8/12 mx-auto", children: [
    /* @__PURE__ */ jsx("div", { id: "HistoryWrapper", className: "flex flex-col", children: /* @__PURE__ */ jsx("h3", { className: "text-slate-400", children: "Recent searches" }) }),
    /* @__PURE__ */ jsx("ul", { className: "list-none list-indented RecentSearches", children: historyResults && historyResults.length > 0 && historyResults.map((result, index) => /* @__PURE__ */ jsx(
      RenderItem,
      {
        historyResults,
        result,
        setQuery,
        setSearchHistory,
        index
      },
      uuid()
    )) })
  ] }) });
};
const RenderItem = (props) => {
  const { historyResults, result, setQuery, setSearchHistory, index } = props;
  const deleteValue = () => {
    var arr = [...historyResults];
    arr.splice(index, 1);
    setSearchHistory(arr);
    localStorage.setItem("searchHistory", JSON.stringify(arr));
  };
  return /* @__PURE__ */ jsxs("li", { className: "my-5 mx-auto cursor-pointer justify-between w-full flex", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "hover:font-bold ",
        onClick: async () => {
          setQuery(result);
          setSearchHistory([]);
        },
        children: result
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "text-[#ff0000] hover:font-bold", onClick: deleteValue, children: "clear" })
  ] });
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [historyResults, setSearchHistory] = useState([]);
  const inputRef = useRef(null);
  const onChangeHandler = (event) => {
    setQuery(event.target?.value);
  };
  const submitSearch = () => {
    const data = localStorage.getItem("searchHistory");
    var arr = data ? JSON.parse(data) : [];
    if (query.trim() != "") {
      console.log("query: ", query);
      arr.push(query);
      arr = [...new Set(arr)];
      localStorage.setItem("searchHistory", JSON.stringify(arr));
      window.location.href = `/blog/search/${query}/1`;
    }
    setSearchHistory([]);
  };
  const enterEvent = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSearch();
    }
  };
  useEffect(() => {
    if (query && query.length > 0) {
      SearchHistory(query, setSearchHistory);
    }
    if (query.length === 0) {
      setSearchHistory([]);
    }
  }, [query]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-y-5", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          id: "QueryWrapper",
          className: "flex bg-[#ffffff] rounded-lg mx-auto w-full border-2 border-solid border-black mr-5 flex-nowrap",
          children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Type here to search a blog post",
              value: query,
              id: "QueryInput",
              className: "rounded-lg w-full px-5 SearchInput text-slate-500",
              onChange: (event) => onChangeHandler(event),
              onKeyDown: enterEvent,
              ref: inputRef
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          id: "SearchButton",
          className: "border-1 rounded-lg text-white bg-[#5b87e4] active:translate-x-[1px] active:translate-y-[1px] px-4 w-fit mx-auto",
          onClick: submitSearch,
          children: "Search"
        }
      )
    ] }),
    historyResults && historyResults.length > 0 && /* @__PURE__ */ jsx(
      RenderRecentSearch,
      {
        setQuery,
        historyResults,
        setSearchHistory
      }
    )
  ] });
};
const SearchHistory = (query, setSearchHistory) => {
  const jsonData = localStorage.getItem("searchHistory");
  const searchHistory = jsonData ? JSON.parse(jsonData) : [];
  var arr = searchHistory.filter((item) => item.includes(query));
  setSearchHistory(arr);
};

const $$Astro$2 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="SearchBar" class="relative block py-[30px] px-[40px] rounded-lg mt-10 mb-10 border-2 border-primaryC h-fit border-solid mx-10"> ${renderComponent($$result, "SearchBar", SearchBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/eli-mordecai/src/components/search/searchbar", "client:component-export": "default" })} </form>`;
}, "D:/Astro/eli-mordecai/src/components/search/index.astro", void 0);

const $$Astro$1 = createAstro();
const prerender$1 = false;
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$page$1;
  const { category_name, page } = Astro2.params;
  let formattedCategoryName = category_name?.replace("-", " ") || "";
  const PAGE_SIZE = 6;
  formattedCategoryName = formattedCategoryName?.charAt(0)?.toUpperCase() + formattedCategoryName?.slice(1);
  let allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../../posts/How to Tell Who Is at Fault in a Car Accident.md": () => import('./How to Tell Who Is at Fault in a Car Accident_BFJPptDl.mjs').then(n => n.H),"../../../posts/How to Tell Who Is at Fault in a Car Accident2.md": () => import('./How to Tell Who Is at Fault in a Car Accident2_IzkcpRL7.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident3.md": () => import('./How to Tell Who Is at Fault in a Car Accident3_CGZx7mqb.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident4.md": () => import('./How to Tell Who Is at Fault in a Car Accident4_NKhdxi1X.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident5.md": () => import('./How to Tell Who Is at Fault in a Car Accident5_RBSjDo4n.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident6.md": () => import('./How to Tell Who Is at Fault in a Car Accident6_DoxxrdPp.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident7.md": () => import('./How to Tell Who Is at Fault in a Car Accident7_D0iVMWPU.mjs')}), () => "../../../posts/*.md");
  } catch (e) {
    allPosts = [];
  }
  let selectedPosts = allPosts.filter((post) => post.frontmatter.category.toLowerCase() === formattedCategoryName.toLowerCase());
  let totalPages = Math.ceil(selectedPosts.length / PAGE_SIZE);
  let pageInt = parseInt(page);
  let paginatedArray = getPaginatedArray(selectedPosts, pageInt, PAGE_SIZE);
  let inBound = page && typeof parseInt(page) === "number" && parseInt(page) <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog Category", "customDescription": `All blog posts related to ${formattedCategoryName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index$1, {})} <div class="container w-container"> <div class="banner-title-wrap"> <h1 class="banner-area-title">All posts related to <span class="text-primaryC">${formattedCategoryName}</span></h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} </div> </div> </div> <div class="divider-section"> <div class="container w-container"> <div class="divider-line"></div> </div> </div> ${renderComponent($$result2, "Searchbar", $$Index, {})} <div class="blog-section"> <div class="container w-container"> <div class="blog-content-wrap"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items w-row"> <!-- Blog List  --> ${selectedPosts.length === 0 && renderTemplate`<h2 class="text-center text-2xl my-5">There are currently no blog posts published at the moment.</h2>`} ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": selectedPosts.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })}`} ${paginatedArray && paginatedArray.length > 0 && renderTemplate`<div class=""> ${paginatedArray.map(async (post) => {
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewPanel, { ...post.frontmatter, "url": post.url })}`;
  })} </div>`} ${totalPages > 1 && renderTemplate`<div class="w-full h-auto"> ${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": selectedPosts.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })} </div>`} </div> </div> </div> </div> </div> <div class="client-section large-space-section"> <div class="container w-container"> <div class="section-center-title"> <div class="center-title-wrap"> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> <h2 class="section-center-title-text dark-color-title">Meet the Partners</h2> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> </div> </div> <div class="w-layout-grid client-image-grid [&>div]:mx-auto"> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d84015f-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d506a9f3525f5c4ab_client-logo-1.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840161-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d0fc70dce3699f4ab_client-logo-2.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840163-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7e6ba739a82705e9fa_client-logo-3.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840165-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7deb1c5944fd2a2b74_client-logo-4.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840167-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7dd8aaa3d823c16db7_client-logo-5.svg" loading="lazy" alt="Client Logo"></div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/blog/category/[category_name]/[page].astro", void 0);

const $$file$1 = "D:/Astro/eli-mordecai/src/pages/blog/category/[category_name]/[page].astro";
const $$url$1 = "/blog/category/[category_name]/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page$1,
    file: $$file$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const SearchQuery = (query, list) => {
  const lowercase_query = query.toLowerCase().trim();
  return list.filter(
    (item) => SearchFrontmatter(lowercase_query, item)
  );
};
const SearchFrontmatter = async (query, post) => {
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
  return false;
};

const $$Astro = createAstro();
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const {
    page,
    search_query
  } = Astro2.params;
  const PAGE_SIZE = 6;
  var allPosts = [];
  var totalPages = 0;
  var searchResults = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../../posts/How to Tell Who Is at Fault in a Car Accident.md": () => import('./How to Tell Who Is at Fault in a Car Accident_BFJPptDl.mjs').then(n => n.H),"../../../posts/How to Tell Who Is at Fault in a Car Accident2.md": () => import('./How to Tell Who Is at Fault in a Car Accident2_IzkcpRL7.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident3.md": () => import('./How to Tell Who Is at Fault in a Car Accident3_CGZx7mqb.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident4.md": () => import('./How to Tell Who Is at Fault in a Car Accident4_NKhdxi1X.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident5.md": () => import('./How to Tell Who Is at Fault in a Car Accident5_RBSjDo4n.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident6.md": () => import('./How to Tell Who Is at Fault in a Car Accident6_DoxxrdPp.mjs'),"../../../posts/How to Tell Who Is at Fault in a Car Accident7.md": () => import('./How to Tell Who Is at Fault in a Car Accident7_D0iVMWPU.mjs')}), () => "../../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  searchResults = SearchQuery(search_query, allPosts);
  totalPages = Math.ceil(searchResults.length / PAGE_SIZE);
  const pageNumber = page ? parseInt(page) : null;
  let inBound = page && typeof pageNumber === "number" && pageNumber <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  var paginatedArray = pageNumber && searchResults.length > 0 ? getPaginatedArray(searchResults, pageNumber, PAGE_SIZE) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog", "customDescription": "Lawyer Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index$1, {})} <div class="container w-container"> <div class="banner-title-wrap"> <h1 class="banner-area-title">Search query: "${search_query}"</h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} </div> </div> </div> ${renderComponent($$result2, "Searchbar", $$Index, {})} <div class="block mx-auto w-fit sm:[&>*]:inline-block justify-between"> <a href="/blog/1" class="mx-auto text-center"> <p class="underline hover:font-bold rounded-lg hover:bg-slate-300 p-1">Reset search</p> </a> </div> <div class="blog-section"> <div class="container w-container"> <div class="blog-content-wrap"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items w-row"> <!-- Blog List  --> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })}`} ${paginatedArray && paginatedArray.length > 0 ? renderTemplate`<div class=""> ${paginatedArray.map(async (post) => {
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewPanel, { ...post.frontmatter, "url": post.url })}`;
  })} </div>` : renderTemplate`<h2 class="text-center text-2xl my-5">Your search didn't return any results.</h2>`} ${totalPages > 1 && renderTemplate`<div class="w-full h-auto"> ${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })} </div>`} </div> </div> </div> </div> </div> <div class="client-section large-space-section"> <div class="container w-container"> <div class="section-center-title"> <div class="center-title-wrap"> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> <h2 class="section-center-title-text dark-color-title">Meet the Partners</h2> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> </div> </div> <div class="w-layout-grid client-image-grid [&>div]:mx-auto"> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d84015f-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d506a9f3525f5c4ab_client-logo-1.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840161-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d0fc70dce3699f4ab_client-logo-2.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840163-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7e6ba739a82705e9fa_client-logo-3.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840165-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7deb1c5944fd2a2b74_client-logo-4.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840167-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7dd8aaa3d823c16db7_client-logo-5.svg" loading="lazy" alt="Client Logo"></div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/blog/search/[search_query]/[page].astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/blog/search/[search_query]/[page].astro";
const $$url = "/blog/search/[search_query]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BannerTitleSeparator as $, RenderPagination as R, _page_$1 as _, $$PreviewPanel as a, $$Index as b, _page_ as c };
