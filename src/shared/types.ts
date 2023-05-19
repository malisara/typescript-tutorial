export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: sting;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
