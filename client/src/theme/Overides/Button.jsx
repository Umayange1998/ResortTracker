// ----------------------------------------------------------------------

export default function Button(theme) {
    return {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              boxShadow: "none",
            },
            boxShadow:'none',
            borderRadius: 20,
          },
          sizeLarge: {
            height: 48,
          },
          boxShadow:"none",
          // contained
          containedInherit: {
            color: theme.palette.grey[800],
            "&:hover": {
              backgroundColor: theme.palette.grey[400],
            },
          },
          containedPrimary: {
           boxShadow:"none"
          },
          containedSecondary: {
          },
          containedInfo: {
          },
          containedSuccess: {
          },
          containedWarning: {
          },
          containedError: {
          },
          // outlined
          outlinedInherit: {
            border: `1px solid ${theme.palette.grey[500_32]}`,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
          textInherit: {
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    };
  }
  