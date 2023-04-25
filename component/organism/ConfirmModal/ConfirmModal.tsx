import { Button } from "component";
import * as S from "./ConfirmModal.styles";

interface IConfirmModalProps {
  title: string;
  content: string;
  handleConfirmModal: (type: "cancel" | "confirm") => void;
}

function ConfirmModal({
  title,
  content,
  handleConfirmModal,
}: IConfirmModalProps) {
  const handleBackgroundClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (!target.closest("#confirmModalContainer")) handleConfirmModal("cancel");
  };

  return (
    <S.Background onClick={handleBackgroundClick}>
      <S.Container id="confirmModalContainer">
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
        <S.ButtonContainer>
          <Button
            buttonType="smallLine"
            onClick={() => {
              handleConfirmModal("cancel");
            }}
          >
            아니요
          </Button>
          <Button
            buttonType="smallFill"
            onClick={() => {
              handleConfirmModal("confirm");
            }}
          >
            네, 삭제할께요
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
}

export default ConfirmModal;
