import * as S from "./BottomUpModal.styles";

interface IBottomUpModalProps {
  items: { content: string; onClick: (content: string) => void }[];
  cancel: () => void;
}

function BottomUpModal({ items, cancel }: IBottomUpModalProps) {
  const handleBackgroundClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (!target.closest("#quotemodalcontainer")) cancel();
  };
  return (
    <S.Background onClick={handleBackgroundClick}>
      <S.Container id="quotemodalcontainer">
        {items.map(({ content, onClick }, i) => (
          <S.Item key={i} onClick={() => onClick(content)}>
            {content}
          </S.Item>
        ))}
      </S.Container>
    </S.Background>
  );
}

export default BottomUpModal;
