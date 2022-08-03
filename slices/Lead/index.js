import React from 'react'
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "../../components/Heading";

const Lead = ({ slice }) => (

  <Bounded as="section" collapsible={false} className="bg-black pb-0 md:pb-0 py-10" yPadding="sm">
    {/*<div className="bg-hero" style={{backgroundImage: `url(${slice.primary.HeroImage.url})`}}>*/}
    {/*</div>*/}
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-28 py-28">
      <div className="grid grid-cols-1 gap-8 py-20 z-10">



              <div className="">
                  {
                      slice.primary.description ?
                        <PrismicRichText field={slice.primary.description}/>
                        : <p>start by editing this slice from inside Slice Machine!</p>
                  }
              </div>
          </div>

          <div className="grid gap-10 py-20 z-10">
              <div className="flex-col items-center">
                <span className="title">
              {
                  slice.primary.title ?
                    <PrismicRichText field={slice.primary.title}/>
                    : <h1>Template slice, update me!</h1>
              }
                </span>
              </div>

          </div>








    </div>

  </Bounded>

)

export default Lead
