type Props = {
    text: string;
    image: any;
}

export default function PictureBox({text, image}: Props) {
    return (
      <div className="PictureBox">
        <div className="PictureHeader">{text}</div>
        <img className="ImageFix" src={image}></img>
      </div>
    );
  }
  