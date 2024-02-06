import {
  Stack,
  List,
  ListItem,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <Stack spacing={4}>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((skeleton) => (
          <ListItem key={skeleton} py={4}>
            <HStack>
              <Skeleton h="32px" w="32px" borderRadius="4px" />
              <SkeletonText skeletonHeight="4" noOfLines={1} w="100%" />
            </HStack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default GenreCardSkeleton;
