import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
