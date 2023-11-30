import React from "react";
import { Card, Image, Text, Group, Badge, Center, Button } from "@mantine/core";
import {
  IconLetterA,
  IconLetterB,
  IconLetterC,
  IconLetterD,
} from "@tabler/icons-react";
import classes from "./Card.module.css";

const mockdata = [
  { label: "Fast", icon: IconLetterD },
  { label: "Efficient", icon: IconLetterB },
  { label: "Stylish", icon: IconLetterC },
  { label: "Dumb", icon: IconLetterA },
];

export function FeatureCard(props) {
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src=" " alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{props.productName}</Text>
          <Text fz="xs" c="dimmed">
            {props.description}
          </Text>
        </div>
        <Badge variant="outline">{props.discount}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Features
        </Text>

        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {props.currentPrice}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
              {props.priceInfo}
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Bid now!
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default FeatureCard;
