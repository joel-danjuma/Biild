// import {
//     div ,
//     Heading,
//     Box,
//     StackProps,
//     useMultiStyleConfig,
//   } from '@chakra-ui/react'

export interface SectionTitleProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  variant?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, description, align, variant, ...rest } = props;
  // const styles = useMultiStyleConfig('SectionTitle', { variant })

  return (
    <div className="flex flex-col items-start gap-4 ">
      <h2>{title}</h2>
      {description && <div className="text-center">{description}</div>}
    </div>
  );
};
