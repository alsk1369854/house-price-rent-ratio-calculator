export interface IDataDisplayMaterial {
  name: string;
  tag?: {
    color: "green" | "red";
    text: string;
  };
  popconfirm: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
}
