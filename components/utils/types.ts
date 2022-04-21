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
  reviewId: number,
  isHelpful: boolean,
  reviewType: string;
}

export interface ShareProps {
  url: string
  text: string,
  title: string
};

export interface MiniProps {
  creatorText: string,
  creatorUrl: string,
  pageText: string,
  pageUrl: string,
  gravatarUrl: string
};

export interface MainProps {
  title: string,
  onDigg: Function,
  starScore: number,
  reviewScore: number,
  eventable: boolean,
  username: string
};

export interface ServiceInfo {
  id: string,
  meetable: boolean,
  reviewAverage: string,
  title: string,
  serviceType: string
};

export interface BreadcrumbLink {
  text: string;
  url?: string;
}
