import React from "react";
import {
  Modal as ModalNextUi,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const Modal = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <ModalNextUi
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                來自大衛大的一封信
              </ModalHeader>
              <ModalBody>
                <p>親愛的新夥伴， 我衷心歡迎你加入CPC 加密先鋒社群！</p>
                <p>很高興你決定加入這個熱情洋溢、充滿可能性的社群。</p>
                <p>
                  在這裡，我們致力將加密貨幣投資變得容易理解和操作。無論你是剛接觸加密世界，還是已經有一些經驗，我們都將努力幫你發展你的投資技能，讓你能自信地進行的交易。
                </p>
                <p>
                  CPC
                  加密先鋒社群是一個充滿活力和互助的地方，這裡有一群擁有豐富知識和熱情的人，他們會與你分享他們的見解，解答你的問題，並和你一起成長。
                </p>
                <p>
                  我們重視學習和分享，無論你是想要了解技術分析、投資策略、還是尋找最新的市場趨勢，我們都會提供支持和資源，讓你在這條充滿挑戰但也充滿機會的道路上走得更遠。
                </p>
                <p>最後，再次歡迎你加入這個 CPC！</p>
                <p>大衛大 - CPC 加密先鋒社群創辦人</p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="ghost" onPress={onClose}>
                  閱讀完畢
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </ModalNextUi>
    </>
  );
};

export default Modal;
