export interface IDataDisplayMaterial {
  name: string;
  tag?: {
    color: "green" | "red";
    text: string;
  };
  popconfirm: {
    title: string;
    description: string;
  };
}
