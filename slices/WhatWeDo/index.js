import React from 'react'
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import clsx from "clsx";

const WhatWeDo = ({ slice }) => (
  <Bounded as="section" collapsible={false} className="bg-black pb-0 md:pb-0">
    <div className="grid grid-cols-2 items-end gap-6 md:grid-cols-2 md:gap-10 lg:gap-10">


      <div className={clsx(
        slice.variation === "imageRight" && "order-last flex justify-center mb-10 mt-10",
                slice.variation === "default" && "order-first flex justify-center mb-10 mt-10"
      )}>
        {prismicH.isFilled.image(slice.primary.MainImage) && (
          <div className="w-72 h-72 object-cover opacity-70 mb-3 ">
          <PrismicNextImage
            field={slice.primary.MainImage}
            layout="responsive"
            className="relative"
          />
          </div>
        )}
      </div>
      <div className="flex flex-col h-[100%] justify-center">
          <div className="title mb-4 text-3xl">
            {
              slice.primary.title ?
                <PrismicRichText field={slice.primary.title}/>
                : <h2>Template slice, update me!</h2>
            }
          </div>
            {
              slice.primary.description ?
                <PrismicRichText field={slice.primary.description}/>
                : <p>start by editing this slice from inside Slice Machine!</p>
            }
        <PrismicLink field={slice.primary.Link}>
          <span className={"text-white"}>{slice.primary.ButtonText}</span>
        </PrismicLink>


      </div>
    </div>
  </Bounded>
)

export default WhatWeDo
