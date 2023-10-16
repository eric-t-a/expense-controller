import styled from "styled-components";

export const TagsContainer = styled.div`
    .tags-container{
        width: 100%;
        max-width: 600px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;

        .card{
            height: 100px;
            width: 150px;
            color: #fff;
            border-radius: 8px;
            text-align: center;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 20px;
            text-shadow: 0px 4px 12px #282828;

            &:hover{
                filter: brightness(1.2);
            }
        }
    }
    
`;