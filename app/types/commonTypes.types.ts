export interface SectionNavigatorProps {
  current: number;
  total: number;
  nextSection?: string;
}

export type ServiceCardProps = {
  count: number;
  title: string;
  text: string;
};

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string;
  tags?: string;
  imageUrl?: string;
  link?: string;
  description?: string[];
  children?: React.ReactNode;
}

export type SelectedModalProps = {
  title: string;
  subTitle: string;
  tags: string;
  imageUrl: string;
  link: string;
  description: string[];
};

export type ReferenceProps = {
  link: string;
  imageBlack: string;
  imageWhite: string;
  alt: string;
};

export type Theme =
  | "theme-yellow"
  | "theme-pink"
  | "theme-blue"
  | "theme-black";
