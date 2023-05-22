import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateModels } from '../../../store/models';

function Model({ className }) {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.models);

  const handleModelSearch = (event) => {
    const searchedText = event.target.value.toLowerCase();

    if (!searchedText) {
      dispatch(
        updateModels({
          ...models,
          all: models.init,
        })
      );

      return;
    }

    const filteredModels = models.init.filter((model) =>
      model.toLowerCase().includes(searchedText)
    );

    dispatch(
      updateModels({
        ...models,
        all: filteredModels,
      })
    );
  };

  const handleSelectModel = (model) => {
    let selectedModels = [...models.selected];

    if (!selectedModels.includes(model)) {
      selectedModels.push(model);
    } else {
      selectedModels = selectedModels.filter(
        (selectedModel) => selectedModel !== model
      );
    }

    dispatch(
      updateModels({
        ...models,
        selected: selectedModels,
      })
    );
  };

  return (
    <div className={`${className}`}>
      <span className="text-sm text-slate-500">Model</span>

      <div className="bg-white shadow-md p-3 mt-1">
        <input
          type="text"
          placeholder="Search"
          className="p-1 mb-3 bg-[#F9F9F9]"
          onInput={handleModelSearch}
        />

        <div className="max-h-[88px] overflow-auto">
          {models.all.map((model, modelIndex) => {
            return (
              <div
                className={`${modelIndex !== 0 && 'mt-2'} flex items-center`}
                key={modelIndex}
                onClick={() => {
                  handleSelectModel(model);
                }}
              >
                <input
                  type="checkbox"
                  name="model"
                  value={model}
                  checked={models.selected.includes(model)}
                  onChange={() => {
                    handleSelectModel(model);
                  }}
                />

                <label className="ml-2">{model}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(Model);
