import { useState, useEffect } from "react";
import { createClient } from "contentful";
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "project" });
      const projects = response.items.map((item) => {
        const { title, text, url, github, img } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        return { title, text, url, github, id, image };
      });
      setProjects(projects);
      console.log(projects);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
