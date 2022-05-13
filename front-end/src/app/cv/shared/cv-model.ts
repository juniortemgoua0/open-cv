import {Ilanguage} from "./ilanguage";

export interface SocialMedia {
  title: string;
  link:string;
}

export interface CvModel {
  last_name:string ;
  first_name: string;
  job:string ;
  profile:string;
  language: Ilanguage[];
  address:string;
  telephone:number;
  social_media:SocialMedia[];

}
