const VGrid = ".v-container{margin-left:auto;margin-right:auto;padding:16px;width:100%}@media (min-width:960px){.v-container{max-width:900px}}@media (min-width:1280px){.v-container{max-width:1200px}}@media (min-width:1920px){.v-container{max-width:1800px}}@media (min-width:2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex:1 1 auto;flex-wrap:wrap;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-spacer{flex-grow:1}.v-col,.v-col-1,.v-col-10,.v-col-11,.v-col-12,.v-col-2,.v-col-3,.v-col-4,.v-col-5,.v-col-6,.v-col-7,.v-col-8,.v-col-9,.v-col-auto,.v-col-lg,.v-col-lg-1,.v-col-lg-10,.v-col-lg-11,.v-col-lg-12,.v-col-lg-2,.v-col-lg-3,.v-col-lg-4,.v-col-lg-5,.v-col-lg-6,.v-col-lg-7,.v-col-lg-8,.v-col-lg-9,.v-col-lg-auto,.v-col-md,.v-col-md-1,.v-col-md-10,.v-col-md-11,.v-col-md-12,.v-col-md-2,.v-col-md-3,.v-col-md-4,.v-col-md-5,.v-col-md-6,.v-col-md-7,.v-col-md-8,.v-col-md-9,.v-col-md-auto,.v-col-sm,.v-col-sm-1,.v-col-sm-10,.v-col-sm-11,.v-col-sm-12,.v-col-sm-2,.v-col-sm-3,.v-col-sm-4,.v-col-sm-5,.v-col-sm-6,.v-col-sm-7,.v-col-sm-8,.v-col-sm-9,.v-col-sm-auto,.v-col-xl,.v-col-xl-1,.v-col-xl-10,.v-col-xl-11,.v-col-xl-12,.v-col-xl-2,.v-col-xl-3,.v-col-xl-4,.v-col-xl-5,.v-col-xl-6,.v-col-xl-7,.v-col-xl-8,.v-col-xl-9,.v-col-xl-auto,.v-col-xxl,.v-col-xxl-1,.v-col-xxl-10,.v-col-xxl-11,.v-col-xxl-12,.v-col-xxl-2,.v-col-xxl-3,.v-col-xxl-4,.v-col-xxl-5,.v-col-xxl-6,.v-col-xxl-7,.v-col-xxl-8,.v-col-xxl-9,.v-col-xxl-auto{padding:12px;width:100%}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;max-width:100%;width:auto}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1{margin-inline-start:8.3333333333%}.offset-2{margin-inline-start:16.6666666667%}.offset-3{margin-inline-start:25%}.offset-4{margin-inline-start:33.3333333333%}.offset-5{margin-inline-start:41.6666666667%}.offset-6{margin-inline-start:50%}.offset-7{margin-inline-start:58.3333333333%}.offset-8{margin-inline-start:66.6666666667%}.offset-9{margin-inline-start:75%}.offset-10{margin-inline-start:83.3333333333%}.offset-11{margin-inline-start:91.6666666667%}@media (min-width:600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;max-width:100%;width:auto}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0{margin-inline-start:0}.offset-sm-1{margin-inline-start:8.3333333333%}.offset-sm-2{margin-inline-start:16.6666666667%}.offset-sm-3{margin-inline-start:25%}.offset-sm-4{margin-inline-start:33.3333333333%}.offset-sm-5{margin-inline-start:41.6666666667%}.offset-sm-6{margin-inline-start:50%}.offset-sm-7{margin-inline-start:58.3333333333%}.offset-sm-8{margin-inline-start:66.6666666667%}.offset-sm-9{margin-inline-start:75%}.offset-sm-10{margin-inline-start:83.3333333333%}.offset-sm-11{margin-inline-start:91.6666666667%}}@media (min-width:960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;max-width:100%;width:auto}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-inline-start:0}.offset-md-1{margin-inline-start:8.3333333333%}.offset-md-2{margin-inline-start:16.6666666667%}.offset-md-3{margin-inline-start:25%}.offset-md-4{margin-inline-start:33.3333333333%}.offset-md-5{margin-inline-start:41.6666666667%}.offset-md-6{margin-inline-start:50%}.offset-md-7{margin-inline-start:58.3333333333%}.offset-md-8{margin-inline-start:66.6666666667%}.offset-md-9{margin-inline-start:75%}.offset-md-10{margin-inline-start:83.3333333333%}.offset-md-11{margin-inline-start:91.6666666667%}}@media (min-width:1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;max-width:100%;width:auto}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0{margin-inline-start:0}.offset-lg-1{margin-inline-start:8.3333333333%}.offset-lg-2{margin-inline-start:16.6666666667%}.offset-lg-3{margin-inline-start:25%}.offset-lg-4{margin-inline-start:33.3333333333%}.offset-lg-5{margin-inline-start:41.6666666667%}.offset-lg-6{margin-inline-start:50%}.offset-lg-7{margin-inline-start:58.3333333333%}.offset-lg-8{margin-inline-start:66.6666666667%}.offset-lg-9{margin-inline-start:75%}.offset-lg-10{margin-inline-start:83.3333333333%}.offset-lg-11{margin-inline-start:91.6666666667%}}@media (min-width:1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;max-width:100%;width:auto}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0{margin-inline-start:0}.offset-xl-1{margin-inline-start:8.3333333333%}.offset-xl-2{margin-inline-start:16.6666666667%}.offset-xl-3{margin-inline-start:25%}.offset-xl-4{margin-inline-start:33.3333333333%}.offset-xl-5{margin-inline-start:41.6666666667%}.offset-xl-6{margin-inline-start:50%}.offset-xl-7{margin-inline-start:58.3333333333%}.offset-xl-8{margin-inline-start:66.6666666667%}.offset-xl-9{margin-inline-start:75%}.offset-xl-10{margin-inline-start:83.3333333333%}.offset-xl-11{margin-inline-start:91.6666666667%}}@media (min-width:2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;max-width:100%;width:auto}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0{margin-inline-start:0}.offset-xxl-1{margin-inline-start:8.3333333333%}.offset-xxl-2{margin-inline-start:16.6666666667%}.offset-xxl-3{margin-inline-start:25%}.offset-xxl-4{margin-inline-start:33.3333333333%}.offset-xxl-5{margin-inline-start:41.6666666667%}.offset-xxl-6{margin-inline-start:50%}.offset-xxl-7{margin-inline-start:58.3333333333%}.offset-xxl-8{margin-inline-start:66.6666666667%}.offset-xxl-9{margin-inline-start:75%}.offset-xxl-10{margin-inline-start:83.3333333333%}.offset-xxl-11{margin-inline-start:91.6666666667%}}";
export {
  VGrid as default
};
//# sourceMappingURL=VContainer-styles-1.mjs-CR2CscOT.js.map
