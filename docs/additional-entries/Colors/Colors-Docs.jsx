import React from 'react';
import ColorListing from './ColorListing';
import COLORS from '../../../src/globals/js/constants/COLORS';
const colorData = {
	"Blues" : {
		"VimeoBlue": COLORS.VimeoBlue,
		"Foam": COLORS.Foam,	
	},

	"Greens" : {
		"Pistachio": COLORS.Pistachio,
		"RumSwizzle": COLORS.RumSwizzle,
	},
	"Reds" : {
		"SunsetOrange": COLORS.SunsetOrange,
		"PalePink": COLORS.PalePink,
	},
	"Grayscale" : {
		"AstroGranite": COLORS.AstroGranite,
		"RegentGray": COLORS.RegentGray,
		"SoutherlySky": COLORS.SoutherlySky,
		"Porcelain":  COLORS.Porcelain,
		"Plaster": COLORS.Plaster,
		"Paste": COLORS.Paste,
		"White": COLORS.White,
	},
	"Interaction State Colors": {
		"VimeoBlue-Darkened": COLORS.VimeoBlueDarkened,
		"Pistachio-Darkened": COLORS.PistachioDarkened,
		"SunsetOrange-Darkened": COLORS.SunsetOrangeDarkened,
		"WarningYellow": COLORS.WarningYellow,
	},
	"Dark Theme Colors": {
		"DarkDark": COLORS.DarkDark,
	}
}

export default function ColorsDocs() {
    return (
        <div className="Pattern__docs">
            <ColorListing colorData = {colorData} />
        </div>
    );
}
