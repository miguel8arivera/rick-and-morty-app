import { FC } from 'react';

type UserInfo = {
  name: string;
  email: string;
  age: number;
  _id: string;
};

type Props = {
  userInfo: UserInfo;
};
const Products: FC<Props> = function ({ userInfo }: Props) {
  return (
    <>
      {userInfo.map((user: UserInfo) => {
        const { name, email, age, _id } = userInfo;
        return (
          <div key={_id}>
            <div>{name}</div>
            <div>{email}</div>
            <div>{age}</div>
          </div>
        );
      })}
      {/* <div>{name}</div>
      <div>{email}</div>
      <div>{age}</div> */}
    </>
  );
};

export default Products;
