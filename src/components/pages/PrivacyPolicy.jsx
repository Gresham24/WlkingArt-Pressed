import logo from "../../assets/logo-black.png";
import {
    StyledPrivacyPolicyContainer,
    StyledPrivacyPolicyH1,
    StyledPrivacyPolicyText,
    StyledLogo,
} from "../../styles/PrivacyPolicy.styles";

function PrivacyPolicy() {
    return (
        <StyledPrivacyPolicyContainer>
            <StyledPrivacyPolicyH1>Privacy Policy</StyledPrivacyPolicyH1>
            <StyledPrivacyPolicyText>
                WE DO NOT OFFER REFUNDS OR EXCHANGES.
            </StyledPrivacyPolicyText>
            <StyledPrivacyPolicyText>
                <b>PROCESSING TIME:</b> 2-5 DAYS (EXCLUDING WEEKENDS. PLEASE
                ORDER WEEKS BEFORE DESIRED EVENT)
            </StyledPrivacyPolicyText>
            <StyledPrivacyPolicyText>
                <b>SHIPPING TIME:</b> 1-3 DAYS (EXCLUDING WEEKENDS)
            </StyledPrivacyPolicyText>
            <StyledPrivacyPolicyText>
                <b>PROCESSING TIME STARTS AFTER PAYMENT IS MADE</b>
            </StyledPrivacyPolicyText>

            <StyledPrivacyPolicyText>
                WLKINGART PRESSED IS NOT RESPONSIBLE FOR DELAYS OR DAMAGE CAUSED
                BY THE SHIPPING CARRIER.
            </StyledPrivacyPolicyText>
            <StyledLogo src={logo} alt="WlkingArt Pressed logo" />
        </StyledPrivacyPolicyContainer>
    );
}

export default PrivacyPolicy;
