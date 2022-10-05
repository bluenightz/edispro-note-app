import type { NextApiRequest, NextApiResponse } from "next";
import { Note } from "../../../interfaces";

export const data: Note[] = [
  {
    id: "1",
    title: "Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making",
    detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque ac est sed ultrices. Nulla ut tincidunt odio. Aenean sit amet ex sed est consequat dapibus vel in libero. Sed convallis, metus vitae ullamcorper mattis, odio mauris faucibus nunc, vel pretium risus nulla quis odio. Donec in tincidunt orci. In viverra efficitur nisi eu lacinia. Suspendisse a neque ante. Cras at turpis erat.

      Phasellus lacinia sit amet neque id feugiat. Integer tincidunt felis est, nec lobortis odio ultrices id. Integer tellus erat, dignissim eu sagittis vitae, accumsan sit amet turpis. In tristique mattis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Integer dictum mi at urna dapibus, sed aliquam est ornare. Maecenas ac elit non sem commodo consectetur vitae non justo. Aenean eu libero suscipit, congue diam in, consectetur est. Donec volutpat et lectus nec convallis. Aenean ultrices est tellus, sit amet finibus enim rhoncus ut. Morbi aliquam sem vitae interdum blandit. Proin lorem libero, imperdiet sed magna ut, viverra vehicula nunc.
      
      Vivamus lobortis dolor sit amet nunc cursus, eu vulputate felis lacinia. Aliquam posuere orci eget urna aliquam, non lobortis erat iaculis. Cras consectetur orci in dolor feugiat, sed malesuada lectus pretium. Sed vel quam ac nisi tincidunt tempus eget quis erat. Etiam viverra molestie nulla, nec porttitor nulla. Suspendisse luctus, nunc quis pretium finibus, ipsum quam sodales augue, ac blandit massa odio posuere arcu. Duis dapibus sodales odio id imperdiet. Sed neque sem, feugiat sollicitudin venenatis ut, pretium ut dui. Sed quis diam accumsan nulla rhoncus pharetra pulvinar at orci.
      
      Cras nec sagittis felis, et tempor ligula. Maecenas faucibus, risus vitae facilisis sagittis, dui dolor mollis diam, quis eleifend urna libero sed mauris. Proin pellentesque a urna a aliquet. Integer vulputate lectus id convallis pretium. Donec tristique accumsan nulla, at euismod est mollis nec. Aliquam gravida pulvinar porttitor. Integer non pulvinar dolor. Duis ut tempus turpis. Nam diam nibh, accumsan eget nunc feugiat, cursus facilisis metus. Morbi gravida velit eu tellus consequat condimentum. Quisque rutrum placerat quam, in mollis odio dignissim nec. Nullam accumsan nisi dictum, ornare lectus sed, egestas ante.
      
      Pellentesque lacinia luctus quam, eget lobortis tellus congue a. Cras dui tellus, pellentesque mollis sapien at, finibus posuere massa. Nam a lacinia justo, at malesuada lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sit amet vestibulum sem. Suspendisse bibendum cursus pretium. Duis feugiat tortor mauris, a cursus lorem porta id. Nulla accumsan, mi at tristique aliquet, dolor nisl mollis urna, in mattis ipsum purus vitae risus. Praesent euismod urna sed aliquam pulvinar. Aenean ligula nulla, elementum non sollicitudin a, ullamcorper sed justo. Vestibulum congue a nisl eget tempus. Maecenas enim est, fermentum et posuere a, elementum ac tellus. Praesent eget eleifend velit, sit amet scelerisque erat. Aenean nibh massa, blandit at tortor vel, aliquam tempor tortor. In aliquet dui ut est convallis, sed tincidunt mi aliquam.`,
  },
];

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Note[]>
) {
  res.status(200).json(data);
}
