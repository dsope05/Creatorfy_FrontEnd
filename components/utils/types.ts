export interface Review {
  id: number;
  reviewTime: Date;
  reviewText: string;
  reviewerName: string;
  reviewerGravatarImage?: string;
}

export interface ReviewTagData {
  Value: number;
  Communication: number;
  Timeliness: number;
}

export interface DiggReviewParameters {
  reviewId: number;
  isHelpful: boolean;
  reviewType: string;
}

export interface BreadcrumbLink {
  text: string;
  url?: string;
}

export interface ShareProps {
  url: string;
  text: string;
  title: string;
}

export interface MiniProps {
  creatorText: string;
  creatorUrl: string;
  pageText: string;
  pageUrl: string;
  gravatarUrl: string;
}

export interface MainProps {
  title: string;
  onDigg: Function;
  starScore: number;
  reviewScore: number;
  eventable: boolean;
  username: string;
}

export interface ServiceInfo {
  id: string;
  meetable: boolean;
  reviewAverage: string;
  title: string;
}
export interface ChatUser {
  extraPublic: {
    // eslint-disable-next-line camelcase
    profile_photo: string;
  };
  handle: string;
  id: string;
  userType: string;
}

export interface ChattedUser {
  id: string;
  uuid: string;
  chattedUser: ChatUser;
}

export interface ChatMessage {
  authorId: string;
  createdOn: string;
  message: string;
  uuid: string;
}

export interface ChatItem {
  buyer: ChatUser;
  creator: ChatUser;
  id: string;
  messages: ChatMessage[];
  service: {
    title: string;
  };
  uuid: string;
}
