import React from "react";
import { Card, Image, Text, Group, Badge, Center, Button } from "@mantine/core";
import {
  IconLetterA,
  IconLetterB,
  IconLetterC,
  IconLetterD,
} from "@tabler/icons-react";
import classes from "./Card2.module.css";

const mockdata = [
  { label: "Fast", icon: IconLetterD },
  { label: "Efficient", icon: IconLetterB },
  { label: "Stylish", icon: IconLetterC },
  { label: "Dumb", icon: IconLetterA },
];

export function FeatureCard2(props) {
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xl">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src=" " alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md" align="center">
        <div>
          <Text fw={600} fz="60">{props.productName}</Text>
          <Text fz="20" c="dimmed">
            {props.description}
          </Text>
        </div>
        <Badge variant="outline" style={{ fontSize: "1.2rem" }}>{props.discount}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="30" c="dimmed" className={classes.label}>
          Features
        </Text>

        <Group gap={8} mb={-8} align="flex-start">
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30} align="center">
          <div>
            <Text fz="40" fw={700} style={{ lineHeight: 1.2 }}>
              {props.currentPrice}
            </Text>
            <Text fz="20" c="dimmed" fw={500} style={{ lineHeight: 1.2 }} mt={3}>
              {props.priceInfo}
            </Text>
          </div>

          <Button radius="10" style={{ flex: 1 }} fz="30" className={classes.bidButton} >
            Bid now!
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default FeatureCard2;
