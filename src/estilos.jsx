import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
    background-color: #8484ff;
    min-height: 75px;
    margin-bottom: 15px;

    div {
        display: flex;
        align-items: center;
    }

    h1{
        margin: 18px;
        color: white;
        text-shadow: 4px 4px 4px rgba(${({ theme }) => theme.cardShadow});
    }

    input {
        width: 350px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 15px;
        box-shadow: 0px 0px 20px rgba(${({ theme }) => theme.cardShadow});
    }
`;

const ReturnBTN = styled.button`
        transition: 500ms ease-in;
        background-color: ${({ theme }) => theme.returnBTNbg};
        color: ${({ theme }) => theme.color};
`;

const SectionPokes = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const Pokes = styled.div`
    display: flex;
    transition: 300ms ease-in-out;
    border-radius: 15px;
    margin: 5px;
    overflow: hidden;
    width: 300px;
    color: #213547;

    &:hover {
        transform: translateY(-15px);
        cursor: pointer;
        box-shadow: 15px 15px 15px rgba(${({ theme }) => theme.cardShadow});
    }
`

const DetailedPokes = styled.div`
    display: flex;
    flex-direction: column;

    transition: 300ms ease-in-out;
    border-radius: 15px;
    margin: 5px;
    overflow: hidden;
    max-width: 500px;
    color: #213547;

    &:hover {
        transform: translateY(-15px);
        cursor: pointer;
        box-shadow: 15px 15px 15px rgba(${({ theme }) => theme.cardShadow});
    }
`

const AbilityContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 20px;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
`

const ItemAbility = styled.div`
    margin-bottom: 15px;
    flex-direction: column;

    p {
        font-size: 14px;
        color: #555;
        margin-left: 20px;
        margin-top: 5px;
    }
`

const InfoPokes = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    height: 262px;

    img {
        width: 100px;
        filter: drop-shadow(10px 10px 4px grey);
    }

    h2 {
        margin: 0;
        font-size: 20px;
    }

    h3, h4 {
        margin: 5px 0;
        font-size: 16px;
        text-align: center;
    }
`

const AddBTN = styled.button`
    margin: 15px;
    padding: 15px 25px;
    background-color: #6363ff;
`

export { Header, SectionPokes, Pokes, DetailedPokes, AbilityContainer, ItemAbility, InfoPokes, AddBTN, ReturnBTN }