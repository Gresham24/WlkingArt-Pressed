import logo from "../../assets/logo-black.png";
import {
    StyledAboutContainer,
    StyledAboutH1,
    StyledAboutText,
    StyledAboutSubheading,
    StyledLogo,
} from "../../styles/About.Styles";

function About() {
  return (
      <StyledAboutContainer>
          <StyledAboutH1>About Us</StyledAboutH1>
          <StyledAboutSubheading>
              FOR THE ROCKSTARS ON AND OFF STAGE
          </StyledAboutSubheading>
          <StyledAboutText>
              Welcome to WlkingArt Pressed, where <b>luxury meets creativity</b>. We
              specialize in <b>gel-x handcrafted</b>, <b>high-quality press-on nails</b>
              designed to elevate your style effortlessly.
          </StyledAboutText>
          <StyledAboutText>
              Our mission is to make beauty accessible and empowering,
              offering a range of <b>custom and preset</b> designs that allow you to
              express your individuality. At WlkingArt Pressed, we believe
              your nails are more than just an accessory—they&apos;re a <b>canvas for
              self-expression</b>. Whether you&apos;re a rockstar on the stage or off,
              we cater to your unique style, bringing designs that shine as
              brightly as you do. From timeless elegance to bold, artistic
              statements, we&apos;re here to make your vision a reality.
          </StyledAboutText>
          <StyledAboutText>
              Each set is meticulously crafted with care, using premium
              materials to ensure durability and a flawless finish. Whether
              you&apos;re preparing for a show-stopping performance, a special
              occasion, or everyday glam, our press-ons are designed to fit
              seamlessly into your lifestyle.
          </StyledAboutText>
          <StyledAboutText>
              Join us in redefining beauty, one nail set at a time. Let
              WlkingArt Pressed be your go-to for luxury nails that make a
              statement without compromise.
          </StyledAboutText>
          <StyledLogo src={logo} alt="WlkingArt Pressed logo" />
      </StyledAboutContainer>
  );
}

export default About;
