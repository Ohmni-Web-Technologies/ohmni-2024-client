import { DocumentActionComponent, DocumentActionProps } from 'sanity';
import { EyeOpenIcon } from '@sanity/icons';

const PreviewAction: DocumentActionComponent = (props: DocumentActionProps) => {
  const { published } = props as { published?: { slug?: { current?: string } } };

  const slug = published?.slug?.current;
  const baseUrl = 'https://www.ohmni-2024-client-2wc2.vercel.app';
  const previewUrl = `${baseUrl}/studio/presentation?preview=/${slug}`;

  if (!slug) return null;

  return {
    label: 'Preview',
    icon: EyeOpenIcon,
    onHandle: () => {
      window.open(previewUrl, '_blank');
    },
  };
};

export default PreviewAction;