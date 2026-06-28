


import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col items-center gap-y-4">
      <span className="text-lg font-bold">{name}</span>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, icon: Icon} = skill;

  return (
    <div className="flex flex-col items-center gap-y-2">
      {Icon && <Icon className="h-12 w-12" />}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';
