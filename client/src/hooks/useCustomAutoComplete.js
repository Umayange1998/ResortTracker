import { useAutocomplete } from "@mui/base/useAutocomplete";

const useCustomAutoComplete = ({ options = [], defaultValues = [], onChange }) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [],
    multiple: true,
    options: [...options],
    getOptionLabel: (option) => option,
    freeSolo: true,
    filterOptions: (options, params) => {
      console.log(options, params);
      const filtered = options.filter((option) =>
        option
          .toLowerCase()
          .split(" ")[0]
          .includes(params.inputValue.toLowerCase())
      );
      const { inputValue } = params;
      // Suggest the creation of a new value
      const isExisting = options.some((option) => inputValue === option);
      if (inputValue !== "" && !isExisting) {
        filtered.push(inputValue);
      }
      return filtered;
    },
    onChange: onChange,
    value: [...defaultValues]
  });

  return [
    getRootProps,
    setAnchorEl,
    focused,
    getInputProps,
    groupedOptions,
    getListboxProps,
    getOptionProps,
    value,
    getTagProps,
  ];
};

export default useCustomAutoComplete;
