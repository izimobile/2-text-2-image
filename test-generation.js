const textToImage = require("./lib/text-to-image");

const testAlign = async (fileName = "test-align.jpeg", textAlign = "left") => {
  const sampleText = "This is testing alignment";

  try {
    await textToImage.generate(sampleText, {
      debug: true,
      textAlign,
      fileName,
      leftMargin: 0,
      rightMargin: 50
    });
  } catch (e) {
    console.log("error", e);
  }
};

testAlign("test-left.jpeg", "left");
testAlign("test-center.jpeg", "center");
testAlign("test-right.jpeg", "right");
