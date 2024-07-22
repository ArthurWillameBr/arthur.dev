import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { WorkExperience } from "./components/pages/home/work-experience";
import { KnowTechs } from "./components/pages/home/know-techs";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { HomePageData } from "@/types/page-info";

const getPageData = (): Promise<HomePageData> => {
  const query = `
   query PageInfoQuery {
  page(where: {slug: "home"}) {
    knownTechs {
      iconSvg
      name
    }
    socials {
      iconSvg
      url
    }
    technologies {
      name
    }
    introduction {
      raw
    }
    highlightProjects {
      slug
      thumbnail {
        url
      }
      title
      shortDescription
      technologies {
        name
      }
    }
  }
}
`

return fetchHygraphQuery(
  query,
  1000 * 60 * 60 * 24, // 1 day
)
}

export default async function Home() {
  
  const { page: pageData } = await getPageData()

  console.log(pageData.highlightProjects)

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience /> 
    </>
  );
}
