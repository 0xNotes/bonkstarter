export default function DescriptionBox() {
  return (
    <div className="DescriptionBox">
      <div className="DescriptionHeader">SNACKER</div>
      <div className="DescriptionText">
        Snacker is an experiment in NFT Minting. Snacker requires three things to mint. A Content Image, a Style Image and a mint fee.
        <br /><br />
        “Snacked” NFTs are burnt
        by being transferred to 0x000000000000000000000000000000000000dEaD. The filetype of the image must be .PNG or .JPG, a mix of these can occur as
        well.
        <br /><br />
        An XP system is also in place to encourage images to be snacked multiple times. XP scores are purely for fun though may enocourage different
        parameters within the AI.
        <br /><br />
        Neural Style Transfer The Style of one image is transferred to the Shape of another. Some Examples Below
      </div>
    </div>
  );
}
