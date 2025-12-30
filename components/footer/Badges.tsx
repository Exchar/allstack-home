"use client";

import {Listbox} from "@nextui-org/react";

export default function Badges() {
  return (
    <div className="py-6 flex justify-center w-full flex-wrap gap-2">
      {/*<a*/}
      {/*  href="https://dofollow.tools"*/}
      {/*  title="Featured on Dofollow.Tools"*/}
      {/*  target="_blank"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    src="https://dofollow.tools/badge/badge_light.svg"*/}
      {/*    alt="Featured on Dofollow.Tools"*/}
      {/*    width="200"*/}
      {/*    height="54"*/}
      {/*  />*/}
      {/*</a>*/}
      © AllStack 2025  / <a href="https://beian.miit.gov.cn">蜀ICP备2023023736号-3</a>
      <div className="friendly-link">
        <ul>
          <li>maintained by 🛠️<a href="https://atian.work">Exchar</a></li>
        </ul>
      </div>
    </div>
  );
}
