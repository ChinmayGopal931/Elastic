import { Button } from '../Button/Button';

interface Tags {
  tags: string[];
}

const Tags = (props: Tags) => {
  return (
    <div className="flex flex-row justify-center gap-3 desktop:justify-start">
      {props.tags.map((tag) => {
        return (
          <Button key={tag} variant="tag-btn">
            <p className="text-xs text-primary_brand_01">{tag}</p>
          </Button>
        );
      })}
    </div>
  );
};

export default Tags;
