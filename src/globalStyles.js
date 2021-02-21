import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-'Trebuchet MS', 'Lucia Sans Unicode', 'Lucida Grande', 'Lucia Sans', Arial, Helvetica, sans-serif, sans-serif;
		scroll-margin-top: 80px;
  }

	html { 
		scroll-behavior: smooth; 
		/* scroll-margin-top: 80px; */
	}

	/* body {
		cursor: none;
	} */

  #instructions {
	position: absolute;
	color: #fff;
	bottom: 0;
	padding-bottom: 6px;
	font-family: sans-serif;
	width: 100%;
	text-align: center;
	pointer-events: none;
}
`;

export default GlobalStyle;