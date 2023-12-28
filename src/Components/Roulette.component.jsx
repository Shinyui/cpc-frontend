import { useState } from "react";
import { Button } from "@nextui-org/react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const prizes = [
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--cP2q_y_Ec2fVflbDduT1S",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "7d24b681-82d9-4fc0-b034-c82f9db11a59--BqWnSJi24i1u-8KuAp-8Y",
    image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
    text: "Apple MacBook Pro 13 Late 2020",
  },
  {
    id: "9da9a287-952f-41bd-8c7a-b488938d7c7a--xiPUXvvuqLGiF7kqRYAEK",
    image: "https://i.ibb.co/T1M05LR/good-2.png",
    text: "Apple iPhone 13 Pro Max 512GB",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--1RnXbC6Ni5fuwmERL9Fbi",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "23c551bf-8425-4ffd-b7c2-77c87844f89d--KvO_SsJ70FUTMZ8SZZEWQ",
    image: "https://i.ibb.co/5Tpfs6W/good-4.png",
    text: "MacBook Air 13",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--IkomgDXXW4auw4xDPmqRB",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "fb121804-e4f6-4fce-bdd6-1e3189172f37--v55A3uS9TtbEgrJ77sSbs",
    image: "https://i.ibb.co/TLjjsG3/good-6.png",
    text: "Apple AirPods Max",
  },
  {
    id: "26ee933e-0858-481d-afe8-b30d3829242a--mtR47_IeEcPJ2Wwc-0NE0",
    image: "https://i.ibb.co/943n9PQ/good-7.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "c769c2b1-df6e-4e6e-8985-53b531527b35--IZfRLryRz2LFFggCyYoZp",
    image: "https://i.ibb.co/HVpYpsH/good-8.png",
    text: "Apple Watch Series 6 44mm",
  },
  {
    id: "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--7jUsaLJa26zqdeNDy3YU9",
    image: "https://i.ibb.co/BnmJvZT/good-9.png",
    text: "Apple Smart Keyboard iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--dkz1BgSsa4HkaIPh6cs7L",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--hwzcgCwu1eU8Brj39pPlm",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--smXGMgUoKKlpyXsxK4sP6",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--LIpAEOJRpV_H_r5E4HNzW",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "fb121804-e4f6-4fce-bdd6-1e3189172f37--3_9lBCeDcK06dyFwQIqrC",
    image: "https://i.ibb.co/TLjjsG3/good-6.png",
    text: "Apple AirPods Max",
  },
  {
    id: "23c551bf-8425-4ffd-b7c2-77c87844f89d--0H_FUV_p4nptz7-GS-d_M",
    image: "https://i.ibb.co/5Tpfs6W/good-4.png",
    text: "MacBook Air 13",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--ITMT7CuI7we0f-D0uvK-E",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--jRu-KoQDLVyMyaH9Li7Z9",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "23c551bf-8425-4ffd-b7c2-77c87844f89d--vI2HCfevvF4fz-SLCyUFS",
    image: "https://i.ibb.co/5Tpfs6W/good-4.png",
    text: "MacBook Air 13",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XN7DRAynBzb2KFL8hV7mt",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "23c551bf-8425-4ffd-b7c2-77c87844f89d---M31wqr0SnpDES6pxvm0A",
    image: "https://i.ibb.co/5Tpfs6W/good-4.png",
    text: "MacBook Air 13",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0---BrAbAz3TVuSmIC9USykp",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--tRLW-_J6DfFtbnIU50PkJ",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--t6N0eJKa5LcP1Czn8HDwa",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "c769c2b1-df6e-4e6e-8985-53b531527b35--vplESgadJivb0svMZY5yZ",
    image: "https://i.ibb.co/HVpYpsH/good-8.png",
    text: "Apple Watch Series 6 44mm",
  },
  {
    id: "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--aiSWtQnzNuCrUVNPvcyz5",
    image: "https://i.ibb.co/BnmJvZT/good-9.png",
    text: "Apple Smart Keyboard iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--owANudVkj2q_8qzCPxtjZ",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--Xvu-wKDoaLBoYAzkKu6y6",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "fb121804-e4f6-4fce-bdd6-1e3189172f37--gTAYvuOT7SpeCvdYe0KEp",
    image: "https://i.ibb.co/TLjjsG3/good-6.png",
    text: "Apple AirPods Max",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--7xbfmMpIjF6-Gg9Ktg4k-",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "7d24b681-82d9-4fc0-b034-c82f9db11a59--lUPWkvrIj4t_r6czGmXXo",
    image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
    text: "Apple MacBook Pro 13 Late 2020",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--uTjgk3eounx57OxDi9q-S",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "26ee933e-0858-481d-afe8-b30d3829242a--5BNc7gonHBc2bPWz6Ftqn",
    image: "https://i.ibb.co/943n9PQ/good-7.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--Cau_MMO618XWLaz6IXbqa",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--5evbl8zhSq7eiK4GWMOFG",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "fb121804-e4f6-4fce-bdd6-1e3189172f37--p8o-E1HjvVYJwyeuuuDWf",
    image: "https://i.ibb.co/TLjjsG3/good-6.png",
    text: "Apple AirPods Max",
  },
  {
    id: "7d24b681-82d9-4fc0-b034-c82f9db11a59--PALHea4HB1L5cSCTQ-w5T",
    image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
    text: "Apple MacBook Pro 13 Late 2020",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--W65Z1fBm7CKmpkr1aAEaz",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "c769c2b1-df6e-4e6e-8985-53b531527b35--O-GO2ihU3Nb1OqZ14Zztn",
    image: "https://i.ibb.co/HVpYpsH/good-8.png",
    text: "Apple Watch Series 6 44mm",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--1HS4eIV32fKv4ilmVGMi7",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--UpqFjL9ngnmuPM4IGHqiS",
    image: "https://i.ibb.co/ZLHZgKf/good-0.png",
    text: "Monoblock Apple iMac 27",
  },
  {
    id: "7d24b681-82d9-4fc0-b034-c82f9db11a59--KQgkkvaSKUT2jINbH6xzQ",
    image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
    text: "Apple MacBook Pro 13 Late 2020",
  },
  {
    id: "9da9a287-952f-41bd-8c7a-b488938d7c7a--mgxKhjfjAIs8JpdEENXhk",
    image: "https://i.ibb.co/T1M05LR/good-2.png",
    text: "Apple iPhone 13 Pro Max 512GB",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--wcDO8zUHnDO0o-GObA_GE",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "23c551bf-8425-4ffd-b7c2-77c87844f89d--y36WywpWdfsk7DPs8mxHS",
    image: "https://i.ibb.co/5Tpfs6W/good-4.png",
    text: "MacBook Air 13",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--O6ipPlVdQvZlsACZc2VNO",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "fb121804-e4f6-4fce-bdd6-1e3189172f37--9sIYLwikrs2VShJTV6bPp",
    image: "https://i.ibb.co/TLjjsG3/good-6.png",
    text: "Apple AirPods Max",
  },
  {
    id: "26ee933e-0858-481d-afe8-b30d3829242a--_j7IUxAgYyhL3lrdoSk8G",
    image: "https://i.ibb.co/943n9PQ/good-7.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "c769c2b1-df6e-4e6e-8985-53b531527b35--iLSr7CFAdatgI0mqDPr8b",
    image: "https://i.ibb.co/HVpYpsH/good-8.png",
    text: "Apple Watch Series 6 44mm",
  },
  {
    id: "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--vCprQ2Pex6-Q4fHsqOv4j",
    image: "https://i.ibb.co/BnmJvZT/good-9.png",
    text: "Apple Smart Keyboard iPad Pro 12.9",
  },
  {
    id: "26ee933e-0858-481d-afe8-b30d3829242a--4tDIxQL4uaWm3liVr6Gxw",
    image: "https://i.ibb.co/943n9PQ/good-7.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--moODW4deglMtxgc_XfsQ2",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--MjIl4m2_ByOP9-CFX-Jgk",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--ZEcL2eVUnYfpoTpSxjk91",
    image: "https://i.ibb.co/BnmJvZT/good-9.png",
    text: "Apple Smart Keyboard iPad Pro 12.9",
  },
  {
    id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43--mddQ1VS0O2FTYStn81daV",
    image: "https://i.ibb.co/64k8D1c/good-5.png",
    text: "Apple iPad Pro 12.9",
  },
  {
    id: "c769c2b1-df6e-4e6e-8985-53b531527b35--mVhaQNkeoHAuhZmmB6Mcn",
    image: "https://i.ibb.co/HVpYpsH/good-8.png",
    text: "Apple Watch Series 6 44mm",
  },
  {
    id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794--O8uY2GFVRRyeo_m3BehfW",
    image: "https://i.ibb.co/Qbm8cNL/good-3.png",
    text: "Apple MacBook Pro M1 13 256GB",
  },
  {
    id: "9da9a287-952f-41bd-8c7a-b488938d7c7a--k9r5RYFGQypimb88P1cXi",
    image: "https://i.ibb.co/T1M05LR/good-2.png",
    text: "Apple iPhone 13 Pro Max 512GB",
  },
  {
    id: "7d24b681-82d9-4fc0-b034-c82f9db11a59--H5UOQOj_BA6RVz8b_akWs",
    image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
    text: "Apple MacBook Pro 13 Late 2020",
  },
  {
    id: "c769c2b1-df6e-4e6e-8985-53b531527b35--NvKmNxtpdFG9AgBMd_Wfp",
    image: "https://i.ibb.co/HVpYpsH/good-8.png",
    text: "Apple Watch Series 6 44mm",
  },
];

const winPrizeIndex = 0;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : generateId(),
}));

const Roulette = () => {
  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log("🥳 Prize defined! 🥳", prizeList[prizeIndex]);
  };

  return (
    <>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={3}
        defaultDesignOptions={{ prizesWithText: false }}
        soundWhileSpinning="https://react-roulette-pro.ivanadmaers.com/assets/f3722b4574da2a35a4ef.mp3"
      />
      <Button className="mt-5 w-full" color="warning" onClick={handleStart}>
        Start
      </Button>
    </>
  );
};

export default Roulette;
