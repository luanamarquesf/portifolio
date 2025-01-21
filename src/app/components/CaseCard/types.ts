export interface CtaProps {
  text: string;
  onClick: () => void;
}

export interface LabelProps {
  color: string;
  text: string;
}

export interface CaseComponentProps {
  label: LabelProps;
  description: string;
  title: string;
  imageUrl: string;
  cta: CtaProps;
  toggleModal: (value: boolean) => void;
  limitChar?: boolean;
}
