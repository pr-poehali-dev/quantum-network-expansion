export type { Work } from "./types"
export { categories } from "./types"
import { worksGroup1 } from "./worksGroup1"
import { worksGroup2 } from "./worksGroup2"
import { worksGroup3 } from "./worksGroup3"

export const works = [...worksGroup1, ...worksGroup2, ...worksGroup3]
