import React from "react";
import { NextSeo } from "next-seo";

import LENGTH_CONSTANTS from "constants/length";

const { MAX_LENGTH_DESCRIPTION } = LENGTH_CONSTANTS;

type AppSeoProps = {
  title?: string;
  metaDescription?: string;
  socialImageUrl?: string;
  faviconImageUrl?: string;
};

const AppSeo = ({ title, metaDescription, socialImageUrl, faviconImageUrl }: AppSeoProps) => {
  const metaDescriptionSeo = metaDescription?.substring(0, MAX_LENGTH_DESCRIPTION);
  const defaultPreviewImage = process.env.NEXT_PUBLIC_IMAGE_SEO || "";
  const defaultTitle = "Portfolio";
  const defaultMetaDescription = "";

  return (
    <NextSeo
      title={title || defaultTitle}
      description={metaDescriptionSeo || defaultMetaDescription}
      twitter={{
        cardType: "summary_large_image",
      }}
      openGraph={{
        title: title,
        description: metaDescriptionSeo || defaultMetaDescription,
        images: [
          {
            url: socialImageUrl ? socialImageUrl : defaultPreviewImage,
            alt: title,
            width: 600,
            height: 600,
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          type: "image/png",
          href: faviconImageUrl as any,
        },
      ]}
      additionalMetaTags={[
        {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width, user-scalable=no",
        },
        {
          name: "keywords",
          content: "",
        },
        {
          name: "author",
          content: "",
        },
      ]}
      robotsProps={{
        maxSnippet: 320,
      }}
    />
  );
};

export default AppSeo;
