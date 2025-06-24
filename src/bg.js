"use strict";

// Define colors
const colors = {
  w0: "#ffffff",
  w1: "#f9f9fa",
  p3: "#1f0036",
  p4: "#25003e",
  p5: "#440071",
  p6: "#3a0066",
  p7: "#2f0052",
  p8: "#25003e",
  p9: "#1f0036"
};

// Define theme obj using colors above
const theme = {
	colors: {
		button_background_active: "#b3b3b399",
		button_background_hover: "#b3b3b366",
		icons: colors.w0,
		frame: colors.p9,

		popup: colors.p7,
		popup_border: colors.p8,
		popup_highlight: colors.p5,
		popup_highlight_text: colors.w0,
		popup_text: colors.w1,

		sidebar: colors.p7,
		sidebar_border: colors.p8,
		sidebar_highlight: colors.p5,
		sidebar_highlight_text: colors.w0,
		sidebar_text: colors.w1,

		tab_background_separator: colors.p6,
		tab_background_text: colors.w1,
		tab_line: colors.p3,
		tab_loading: colors.p3,
		tab_selected: colors.p6,
		tab_text: colors.w0,

		toolbar: colors.p6,
		toolbar_text: colors.w0,
		toolbar_bottom_separator: colors.p8,
		toolbar_top_separator: colors.p8,
		toolbar_vertical_separator: colors.p7,

		toolbar_field: colors.p4,
		toolbar_field_focus: colors.p3,
		toolbar_field_border: colors.p8,
		toolbar_field_border_focus: colors.p8,
		toolbar_field_separator: colors.p3,
		toolbar_field_text: colors.w1,
		toolbar_field_text_focus: colors.w0
	}
};

// Make function to update theme
function updateTheme(win) {
	// Change theme only if the window's private 
	if (win.incognito) {
		browser.theme.update(win.id,theme);
	}
}

// Subscribe function to window creation
browser.windows.onCreated.addListener(updateTheme);
