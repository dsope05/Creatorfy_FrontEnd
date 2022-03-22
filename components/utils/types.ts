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

export interface OnVoteParameters {
  reviewId: number,
  isHelpful: boolean,
  reviewType: string;
}
