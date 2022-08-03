import React from 'react'
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

const Solutions = ({ slice }) => (
  <Bounded as="section" collapsible={false} className="bg-black pb-0 md:pb-0 py-10" yPadding="sm">
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>


    <div className="grid md:grid-cols-2  grid-rows-2 gap-12 sm:grid-cols-1 pt-10 pb-10">
        {slice?.items?.map((item,i) => (
          <div
            key={i}
            className="font-semibold tracking-tight text-slate-800 px-5 pt-10 pb-10 h-60 flex flex-col justify-center bg-pink-50 bg-opacity-20 "
          >
              {prismicH.isFilled.image(item.Image) && (
                <div className="w-20 h-20 object-cover opacity-70 mb-3">
                    <PrismicNextImage
                      field={item.Image}
                      layout="responsive"
                      className="relative"
                    />
                </div>
              )}
            <h2 className="text-3xl text-white mb-2">{ item.Title }</h2>
            <PrismicRichText field={item.Description} />
          </div>
        ))}
    </div>
  </Bounded>
)

export default Solutions
