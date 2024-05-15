interface MobileMenuProps {}

type LinkItemType = {
  url: string;
  label: string;
  subDirectory?: Array<LinkItemType>;
};

type optionsType = {
  label: string;
  link: string;
  subDirectory: Array<any>;
};

interface MobileDropDownProps {
  label: string;
  options: Array<optionsType>;
  currentPath: string;
}

interface faqArray {
  title: string;
  content: string;
}

type ImageType = {
  url: string;
  alt: string;
};

interface formattedPostType {
  title: string;
  pubDate: Date;
  description?: string;
  excerpt?: string;
  author: string;
  featured_image?: string | HTMLImageElement | null;
  images?: Array<ImageType | string> | null;
  tags?: Array<TagType | string> | null;
  body?: HTMLElement | string | null;
  url?: string | null;
}

interface PostType {
  frontmatter: {
    layout: string;
    title: string;
    pubDate: Date;
    description?: string;
    excerpt?: string;
    author: string;
    category: string;
    featured_image?: string;
    defaultImg: string | ImageType;
    phoneImg: string | ImageType;
    mediumTabImg: string | ImageType;
    tabletImg: string | ImageType;
    body?: HTMLElement | string | null | undefined;
    file?: string;
  };
  url?: string;
}

interface CreateStaticPathArrayType {
  allPosts: Array<PostType>;
  PAGE_SIZE: number;
  totalPages: number;
  assets: Array<any>;
}

type PostAssetType = {
  default: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
};

interface TagStaticPathArrayType {
  allPosts: Array<PostType>;
  assets: Array<PostAssetType>;
  PAGE_SIZE: number;
}

interface PathArray_TagsAndPageType {
  params: {
    tag: string;
    page: number;
  };
  props: {
    totalPages: number;
    paginatedArray: Array<PostType>;
    totalPosts: number;
  };
}

type RenderGeneralPaginationType = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  totalPages: number;
  isMobile: boolean;
  search_query?: string | null | undefined;
  category: string;
  categoryName: string;
};

type UsePaginationType = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
};

type RenderPaginationType = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  totalPages: number;
  isMobile: boolean;
  search_query?: string | null | undefined;
};

type TagType = {
  tag: string;
};

type authorType = {
  frontmatter: {
    author: string;
    bio: string;
    profile_picture: string | ImageType;
    layout: string;
  };
  url: string;
};

interface ReactLinkItemProps {
  currentPath: string;
  href: string;
  label: string;
  customStyle?: string;
}

interface TrustReasonType {
  label: string;
  description: string;
  icon: ImageMetadata | ImageType | ImageBitmap;
}

interface ListItemType {
  label?: string;
  description: string;
}

export type {
  formattedPostType,
  MobileMenuProps,
  LinkItemType,
  MobileDropDownProps,
  faqArray,
  PostType,
  PostAssetType,
  CreateStaticPathArrayType,
  TagStaticPathArrayType,
  PathArray_TagsAndPageType,
  RenderGeneralPaginationType,
  UsePaginationType,
  RenderPaginationType,
  TagType,
  ImageType,
  authorType,
  ReactLinkItemProps,
  TrustReasonType,
  ListItemType,
};
