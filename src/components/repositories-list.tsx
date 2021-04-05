import * as React from "react";
import { useEffect } from "react";
import useFetch from "use-http";
import {
  VStack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Box
} from "@chakra-ui/react";
import { PageSlideFade, StaggerChildren } from "./page-transitions";
import { repositories } from "../data/repositories";
import RepositoryCard from "./repository-card1";
import Header from "./header";
import { MotionBox } from "./motion";

const TURQUOISE = "#06b6d4";

const RepositoriesList = () => {
  const { get, request, response, loading, error, data } = useFetch(
    "https://api.github.com"
  );

  useEffect(() => {
    console.log(data);

    get("/users/MA-Ahmad").then(res => {
      console.log(res);
    });
    get("/repos/MA-Ahmad").then(res => {
      console.log(res);
    });
    get("/repos/MA-Ahmad/rails-authentication-app/languages").then(res => {
      console.log(res);
    });
  }, []);
  return (
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <Header underlineColor={TURQUOISE} mt={0} mb={0}>
          Open Source
        </Header>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          This page lists some of the open source repositories I have published
          or contributed to.
        </Text>
      </VStack>
      <StaggerChildren>
        <SimpleGrid columns={[2, 2, 3]} spacing={4} mt={12}>
          {repositories.map((repo, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                key={index}
                title={repo.title}
                description={repo.description}
                cover={repo.cover}
                blurHash={repo.blurHash}
                technologies={repo.technologies}
                url={repo.url}
                live={repo.live}
                stars={repo.stars}
                fork={repo.fork}
                created={repo.created}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default RepositoriesList;
