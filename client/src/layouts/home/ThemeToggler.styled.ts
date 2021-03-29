import styled from 'styled-components';

const craterMixin = (top: string, left: string, size: string) => `
    content: '';
    position: absolute;
    top: ${top};
    left: ${left};
    width: ${size};
    height: ${size};
    background-color: #efeeda;
    border-radius: 100%;
    border: 4px solid #dee1c5;
`;

const cloudBubbleMixin = (top: string, right: string, width: string, height: string, deg: string) => `
    content: '';
    display: block;
    position: relative;
    top: ${top};
    right: ${right};
    width: ${width};
    height: ${height};
    border: 8px solid #d4d4d2;
    border-radius: 100%;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotateZ(${deg});
    background-color: #fff;
`;

const StyledWrapper = styled.div`
    padding: 9px 10px;
`;

export const StyledToggleCaption = styled.div`
    color: ${({ theme }) => theme.body.color};
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(13px, 2vw, 17px);
    text-align: center;
`;

export const StyledToggle = styled.div`
    position: relative;
    width: 78px;
    margin: 10px 5px 2px 5px;
    padding: 4px;
    border-radius: 40px;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.home.theme_toggler_border};
    background-color: #c0e6f6;
    transform: scale(0.7);
    &:before,
    &:after {
        content: '';
        display: table;
    }
    &:after {
        clear: both;
    }
    .toggle-bg {
        position: absolute;
        top: -4px;
        left: -4px;
        width: 100%;
        height: 100%;
        background-color: #c0e6f6;
        padding: 4px;
        transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .toggle-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        z-index: 2;
        opacity: 0;
    }

    .toggle-switch {
        position: relative;
        width: 20px;
        height: 20px;
        margin-left: 50px;
        background-color: #f5eb42;
        border: 4px solid #e4c74d;
        border-radius: 50%;
        transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .toggle-switch-figure {
        position: absolute;
        bottom: -14px;
        left: -50px;
        display: block;
        width: 80px;
        height: 30px;
        border: 8px solid #d4d4d2;
        border-radius: 20px;
        background-color: #fff;
        transform: scale(0.4);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        &:after {
            ${cloudBubbleMixin('-65px', '-42px', '15px', '15px', '70deg')}
        }
        &:before {
            ${cloudBubbleMixin('-25px', '-10px', '30px', '30px', '30deg')}
        }
    }

    .toggle-switch-figureAlt {
        ${craterMixin('5px', '2px', '2px')}
        box-shadow: 42px -7px 0 -3px #FCFCFC, 55px -10px 0 -3px #FCFCFC, 54px 4px 0 -4px #FCFCFC, 63px 7px 0 -2px #FCFCFC, 51px 12px 0 -4px #FCFCFC, 34px 8px 0 -2px #FCFCFC, 38px 13px 0 -3px #FCFCFC;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scale(0);
    }

    .toggle-switch-figureAlt:before {
        ${craterMixin('-13px', '21px', '4px')}
    }

    .toggle-switch-figureAlt:after {
        ${craterMixin('6px', '19px', '1px')}
    }

    .toggle-input:checked ~ .toggle-switch {
        margin-left: 0;
        border-color: #aaa;
        background-color: #fffdf2;
    }

    .toggle-input:checked ~ .toggle-bg {
        background-color: #484848;
    }

    .toggle-input:checked ~ .toggle-switch .toggle-switch-figure {
        margin-left: 40px;
        opacity: 0;
        transform: scale(0.1);
    }

    .toggle-input:checked ~ .toggle-switch .toggle-switch-figureAlt {
        transform: scale(1);
    }
`;

export default StyledWrapper;
