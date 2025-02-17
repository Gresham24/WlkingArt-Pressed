import logo from "../../assets/logo-black.png";
import presetsBg from "../../assets/galaxy-design.jpg";
import enigmaBg from "../../assets/pink-tip-design.jpg";
import {
    StyledSizesContainer,
    StyledSizesH1,
    StyledSizesText,
    StyledSizesSubheading,
    StyledLogo,
    StyledSectionContent,
    StyledSection,
} from "../../styles/Sizes.styles";

function Sizes() {
    return (
      <StyledSizesContainer>
      <StyledSizesH1>Types of Sets</StyledSizesH1>
      
      <StyledSection $backgroundImage={presetsBg}>
          <StyledSectionContent>
              <StyledSizesSubheading>PRE-SETS</StyledSizesSubheading>
              <StyledSizesText>
                  These sets come in specific designs, colors, and themes that are
                  created in advance by the nail artist. Unlike custom sets, where
                  the design is tailored to a customer&apos;s preferences, preset
                  sets are curated to offer trendy, stylish, or classic designs
                  that cater to a variety of tastes.
              </StyledSizesText>
              <StyledSizesText>
                  They are typically available in standard nail sizes. Can be
                  purchased and applied immediately. A pre-designed and pre-made
                  collection of press-on nails that are ready to wear.
              </StyledSizesText>
              <StyledSizesText>
                  Join us in redefining beauty, one nail set at a time. Let
                  WlkingArt Pressed be your go-to for luxury nails that make a
                  statement without compromise.
              </StyledSizesText>
          </StyledSectionContent>
      </StyledSection>

      <StyledSection $backgroundImage={enigmaBg}>
          <StyledSectionContent>
              <StyledSizesSubheading>ENIGMA</StyledSizesSubheading>
              <StyledSizesText>
                  Unleash the ultimate expression of creativity with enigma sets.
                  These designs are inspired by anything and everything-
                  paintings, tattoos, nature, food, movies, iconic locations, etc.
              </StyledSizesText>
              <StyledSizesText>
                  Expect stunning complexity, cohesive artistry, and pure
                  fabulousness. Every nail becomes a tiny canvas for unlimited
                  possibilities. With Enigma Sets, the only rule is that there are
                  no rules—prepare to go all out and make a statement like never before!
              </StyledSizesText>
              <StyledSizesText>
                  Collaboration between the customer and our nail tech, where
                  ideas are shared and explored together, with the customer
                  entrusting creative control to the artist to bring the vision to
                  life.
              </StyledSizesText>
          </StyledSectionContent>
      </StyledSection>

      <StyledLogo src={logo} alt="WlkingArt Pressed logo" />
  </StyledSizesContainer>
    );
}

export default Sizes;
