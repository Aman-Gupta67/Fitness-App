import { useState } from 'react';
import { dietDays, workoutDays } from './data';
import { Dumbbell, Activity, ShieldPlus, PlaySquare } from 'lucide-react';

export default function App() {
  const currentDayNumber = new Date().getDay();
  const autoIndex = currentDayNumber === 0 ? 6 : currentDayNumber - 1;

  const [activeTab, setActiveTab] = useState<'overview' | 'workout' | 'diet' | 'roadmap' | 'rules'>('workout');
  const [selW, setSelW] = useState(autoIndex);
  const [selD, setSelD] = useState(autoIndex);

  const ExRow = ({ ex, tag }: { ex: any, tag?: string }) => {
    const [showInstr, setShowInstr] = useState(false);
    const [currIdx, setCurrIdx] = useState(0);

    const allVariants = [
      { name: ex.name, sets: ex.sets, note: ex.note, instr: ex.instr, calBurn: ex.calBurn },
      ...(ex.alternatives || []),
    ];
    const curr = allVariants[currIdx];
    const total = allVariants.length;
    const hasAlts = total > 1;

    const goPrev = () => { setCurrIdx(i => i - 1); setShowInstr(false); };
    const goNext = () => { setCurrIdx(i => i + 1); setShowInstr(false); };

    let Icon = Dumbbell;
    if (tag === 'Cardio' || tag === 'HIIT') Icon = Activity;
    if (tag === 'Rest') Icon = ShieldPlus;

    return (
      <div className="exrow">
        <div className="gifwrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Icon size={32} color="var(--acc)" opacity={0.8} />
          <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(curr.name + " exercise form tutorial")}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--blu)', textDecoration: 'none', background: 'rgba(91,156,246,0.1)', padding: '3px 6px', borderRadius: '4px', fontWeight: 600 }}>
            <PlaySquare size={12} /> YouTube
          </a>
        </div>
        <div className="exinfo">
          <div className="ex-header">
            <div className="exname">
              {curr.name}
              {currIdx > 0 && <span className="ex-alt-badge">Alt</span>}
            </div>
            {hasAlts && (
              <div className="ex-nav">
                <button className="ex-nav-btn" onClick={goPrev} disabled={currIdx === 0}>&#8249;</button>
                <span className="ex-nav-pos">{currIdx + 1}/{total}</span>
                <button className="ex-nav-btn" onClick={goNext} disabled={currIdx === total - 1}>&#8250;</button>
              </div>
            )}
          </div>
          {curr.calBurn && <div className="ex-calburn">&#9889; {curr.calBurn}</div>}
          <div className="exnote">{curr.note}</div>
          {curr.instr && curr.instr.length > 0 && (
            <>
              <button className="show-btn" onClick={() => setShowInstr(!showInstr)}>
                {showInstr ? '- Hide instructions' : '+ How to perform'}
              </button>
              {showInstr && (
                <div className="exinstr" style={{ display: 'block' }}>
                  {curr.instr.map((step: string, idx: number) => (
                    <div className="exinstr-step" key={idx}>
                      <span className="exinstr-num">{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="exsets">{curr.sets}</div>
      </div>
    );
  };

  return (
    <>
      <nav>
        <div className="brand">Fitness App</div>
        <div className="ntabs">
          <div className={`ntab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</div>
          <div className={`ntab ${activeTab === 'workout' ? 'active' : ''}`} onClick={() => setActiveTab('workout')}>Workout Plan</div>
          <div className={`ntab ${activeTab === 'diet' ? 'active' : ''}`} onClick={() => setActiveTab('diet')}>Diet Plan</div>
          <div className={`ntab ${activeTab === 'roadmap' ? 'active' : ''}`} onClick={() => setActiveTab('roadmap')}>3-Month Roadmap</div>
          <div className={`ntab ${activeTab === 'rules' ? 'active' : ''}`} onClick={() => setActiveTab('rules')}>Key Rules</div>
        </div>
      </nav>

      {/* OVERVIEW */}
      <div className={`page ${activeTab === 'overview' ? 'active' : ''}`}>
        <div className="hero">
          <div className="eyebrow">Aman Gupta - Age 28 - 5ft 6in - 69.6 kg - Full Gym Access</div>
          <div className="hero-h">Your <span>3-4 Month</span> Body Transformation Plan</div>
          <div className="hero-sub">Science-backed plan with real exercise images - covering strength training, cardio, and diet built entirely around your existing food habits and health conditions.</div>
        </div>
        <div className="stats">
          <div className="sc"><div className="sl">BMI</div><div className="sv co">24.8</div><div className="sn">Borderline overweight</div></div>
          <div className="sc"><div className="sl">Body Fat</div><div className="sv cr">24-26%</div><div className="sn">Target: 14-17%</div></div>
          <div className="sc"><div className="sl">Fat Mass</div><div className="sv cr">17-18 kg</div><div className="sn">Lose 8-10 kg fat</div></div>
          <div className="sc"><div className="sl">BMR</div><div className="sv cb">1,608 kcal</div><div className="sn">At complete rest</div></div>
          <div className="sc"><div className="sl">Maintenance TDEE</div><div className="sv">2,493 kcal</div><div className="sn">Current daily burn</div></div>
          <div className="sc"><div className="sl">Target Calories</div><div className="sv cg">2,050 kcal</div><div className="sn">440 kcal deficit/day</div></div>
          <div className="sc"><div className="sl">Protein Goal</div><div className="sv ca">110-120g</div><div className="sn">Muscle protection</div></div>
          <div className="sc"><div className="sl">Carbs</div><div className="sv">220-240g</div><div className="sn">Training fuel</div></div>
          <div className="sc"><div className="sl">Fat</div><div className="sv">55-65g</div><div className="sn">Hormones + liver</div></div>
        </div>
        <div className="alert aw"><strong>Health Conditions Factored In:</strong> Borderline cholesterol - reduced saturated fat, increased soluble fibre. Pre-diabetic + fatty liver - reduced refined carbs, removed sugar in tea, higher protein. Right shoulder rotator pain - no overhead pressing for 4 weeks, face pulls every session. Neck/back stiffness - mandatory 5-min mobility warm-up before every session.</div>
        <div className="alert ai"><strong>Calculations:</strong> BMR via Mifflin-St Jeor formula. Activity multiplier 1.55 (desk job + 7-8k steps/day). Protein at 1.8g/kg lean body mass (LBM ~52 kg). Deficit of 440 kcal/day = approx 0.5 kg fat loss per week safely.</div>
        <div className="alert aa"><strong>Alcohol Note:</strong> Your 4-5 drinks x 2-3 times/month = 600-900 empty kcal per session plus liver stress, disrupted sleep, and elevated cortisol - directly blocks fat loss. Reduce to max 2 drinks per occasion, max twice a month. Prefer spirits + soda over beer.</div>
        
        <div className="stitle">Weekly Training Schedule</div>
        <div className="stats" style={{ gridTemplateColumns: 'repeat(7,1fr)' }}>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Mon</div><div className="dtag ts" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>Push</div><div className="sn" style={{ marginTop: '4px' }}>Chest / Shoulder / Tri</div></div>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Tue</div><div className="dtag tc" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>Cardio</div><div className="sn" style={{ marginTop: '4px' }}>LISS + Core</div></div>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Wed</div><div className="dtag ts" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>Legs</div><div className="sn" style={{ marginTop: '4px' }}>Quad / Ham / Glute</div></div>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Thu</div><div className="dtag tr" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>Rest</div><div className="sn" style={{ marginTop: '4px' }}>Active Recovery</div></div>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Fri</div><div className="dtag ts" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>Pull</div><div className="sn" style={{ marginTop: '4px' }}>Back / Bicep</div></div>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Sat</div><div className="dtag th" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>HIIT</div><div className="sn" style={{ marginTop: '4px' }}>Full Body Burn</div></div>
          <div className="sc" style={{ textAlign: 'center' }}><div className="sl">Sun</div><div className="dtag tr" style={{ fontSize: '11px', padding: '3px 6px', margin: '3px 0' }}>Rest</div><div className="sn" style={{ marginTop: '4px' }}>Full Rest + Prep</div></div>
        </div>
        <div className="footer">
          <strong>Personalised Plan - Aman Gupta</strong><br />
          69.6 kg / 5ft 6in / 28 yrs / 24-26% body fat / Vegetarian + Egg / Full Gym Access<br />
          Conditions: Borderline cholesterol / Pre-diabetic / Fatty liver / Shoulder rotator pain<br />
          Duration: 12-16 weeks | Blood work at Week 0, 6, and 12
        </div>
      </div>

      {/* WORKOUT */}
      <div className={`page ${activeTab === 'workout' ? 'active' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '.75rem' }}>
          <div className="stitle" style={{ margin: 0 }}>5-Day Workout Plan <span className="pill pb">Full Gym</span></div>
        </div>
        <div className="alert ai" style={{ marginBottom: '1rem' }}>Every session starts with a <strong>5-min mobility warm-up</strong> (neck rolls, shoulder circles, cat-cow, hip rotations). End with 5-min stretch. <strong>Face pulls every session</strong> - non-negotiable for shoulder rehab.</div>
        
        <div className="wstrip">
          {workoutDays.map((d, i) => (
            <div key={i} className={`dbtn ${i === selW ? 'sel' : ''}`} onClick={() => setSelW(i)}>
              <div className="dbtn-n">{d.day}</div>
              <div className={`dtag ${d.tc}`}>{d.tag}</div>
            </div>
          ))}
        </div>

        <div className="wcard">
          <div className="whead">
            <div>
              <div className="wtitle">{workoutDays[selW].title}</div>
              <div className="wfocus">{workoutDays[selW].focus}</div>
              <div className="mchips">
                <span className="mchip">{workoutDays[selW].dur}</span>
                <span className="mchip">{workoutDays[selW].split}</span>
              </div>
            </div>
          </div>
          {workoutDays[selW].groups.map((g, idx) => (
            <div key={idx}>
              <div className="grphead">{g.label}</div>
              {g.exs.map((ex, exIdx) => <ExRow key={exIdx} ex={ex} tag={workoutDays[selW].tag} />)}
            </div>
          ))}
        </div>
      </div>

      {/* DIET */}
      <div className={`page ${activeTab === 'diet' ? 'active' : ''}`}>
        <div className="stitle">Daily Diet Plan <span className="pill pg">2,050 kcal Target</span></div>
        <div className="alert as">Built from <strong>your exact dishes</strong> - only quantities adjusted. Protein boosted to 105-115g/day via extra whey and eggs. Sugar in tea removed. Oil at 7-8g per meal. All weights are RAW.</div>
        
        <div className="wstrip" style={{ gridTemplateColumns: 'repeat(7,1fr)' }}>
          {dietDays.map((d, i) => (
            <div key={i} className={`dbtn ${i === selD ? 'sel' : ''}`} onClick={() => setSelD(i)}>
              <div className="dbtn-n">{d.day}</div>
            </div>
          ))}
        </div>

        <div id="d-detail">
          {dietDays[selD].meals.map((m, idx) => (
            <div className="meal-card" key={idx}>
              <div className="meal-th">
                <span className="meal-tl">{m.time}</span>
                <span className="meal-kcal">{m.cals}</span>
              </div>
              <div className="meal-body">
                <div className="meal-name">{m.name}</div>
                <div className="meal-detail">{m.detail}</div>
                {(m as any).mMacros && (
                  <div className="meal-mmacros">
                    <span className="mm-pill mmp">P: {(m as any).mMacros.p}</span>
                    <span className="mm-pill mmc">C: {(m as any).mMacros.c}</span>
                    <span className="mm-pill mmf">Fiber: {(m as any).mMacros.fiber}</span>
                  </div>
                )}
                <div className="meal-chg">Change: {m.change}</div>
              </div>
            </div>
          ))}
          <div className="mstrip">
            <div className="mc2">Total: <strong>{dietDays[selD].macros.cals} kcal</strong></div>
            <div className="mc2">Protein: <strong>{dietDays[selD].macros.p}</strong></div>
            <div className="mc2">Carbs: <strong>{dietDays[selD].macros.c}</strong></div>
            <div className="mc2">Fat: <strong>{dietDays[selD].macros.f}</strong></div>
          </div>
        </div>
      </div>

      {/* ROADMAP */}
      <div className={`page ${activeTab === 'roadmap' ? 'active' : ''}`}>
        <div className="stitle">3-4 Month Transformation Roadmap</div>
        <div className="pgrid">
          {[
            { num: 'Phase 1 - Weeks 1-4', title: 'Foundation and Habit Building', desc: 'Learn lifts with proper form. Build gym habit. Start calorie deficit. Moderate intensity - form over weight. No overhead pressing. Introduce 2 cardio days per week.', target: 'Target: Lose 1-1.5 kg - Establish routine - Cut sugar' },
            { num: 'Phase 2 - Weeks 5-8', title: 'Progressive Overload Begins', desc: 'Increase weights 5% every 1-2 weeks. Add incline pressing if shoulder allows. HIIT 1x per week. Visible fat loss starts now. Track weight every Monday.', target: 'Target: Lose 2-2.5 kg total - Body fat drops to 21-22%' },
            { num: 'Phase 3 - Weeks 9-12', title: 'Intensify and Peak Fat Burn', desc: 'Heavier compound lifts. 2x HIIT per week. Consider calorie cycling. Blood markers visibly improve. Belly fat noticeably reduced. Muscle definition emerging.', target: 'Target: Lose 3-4 kg total - Body fat 18-19%' },
            { num: 'Phase 4 - Weeks 13-16', title: 'Recomposition and Consolidate', desc: 'Slight calorie increase (+100 kcal) to support lean muscle building. Maintain protein high. Monthly blood tests for cholesterol, HbA1c, liver enzymes.', target: 'Target: Body fat 16-17% - Visible definition - Healthy markers' },
          ].map((phase, i) => (
            <div className="pcard" key={i}>
              <div className="pnum">{phase.num}</div>
              <div className="ptitle">{phase.title}</div>
              <div className="pdesc">{phase.desc}</div>
              <div className="ptarget">{phase.target}</div>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="stitle">Expected Results Timeline</div>
        <div className="stats">
          <div className="sc"><div className="sl">Month 1</div><div className="sv ca">-1.5 kg</div><div className="sn">Fat + water weight</div></div>
          <div className="sc"><div className="sl">Month 2</div><div className="sv co">-2 kg</div><div className="sn">Consistent fat loss</div></div>
          <div className="sc"><div className="sl">Month 3</div><div className="sv cg">-2.5 kg</div><div className="sn">Visible muscle gains</div></div>
          <div className="sc"><div className="sl">Total Fat Loss</div><div className="sv cg">6-8 kg</div><div className="sn">Pure fat, not muscle</div></div>
          <div className="sc"><div className="sl">Muscle Gain</div><div className="sv cb">1-2 kg</div><div className="sn">Lean muscle added</div></div>
          <div className="sc"><div className="sl">New Body Fat</div><div className="sv ct">16-18%</div><div className="sn">Optimal range for men</div></div>
        </div>
        <div className="alert aw" style={{ marginTop: '1rem' }}><strong>Blood Work Schedule:</strong> Week 0 baseline, Week 6, and Week 12. Check: Fasting glucose, HbA1c, Lipid profile, Liver enzymes, Vitamin D, B12.</div>
      </div>

      {/* RULES */}
      <div className={`page ${activeTab === 'rules' ? 'active' : ''}`}>
        <div className="stitle">Non-Negotiable Daily Rules</div>
        <div className="tgrid">
          <div className="tcard"><strong>Protein first at every meal</strong>Eat dal, egg, or paneer BEFORE roti or rice. Slows glucose spike - critical for pre-diabetic management. You feel full with less carbs.</div>
          <div className="tcard"><strong>Cut sugar in tea completely</strong>8g sugar x 2 cups = 64 kcal and 16g sugar daily. Switch to stevia. This single change directly improves HbA1c over 12 weeks.</div>
          <div className="tcard"><strong>Oil stays at 7-8g per meal</strong>Use a kitchen scale. Non-stick pan reduces oil need by 30-50%. Every extra 5g = 45 kcal. Over a month that is 1,350 hidden kcal.</div>
          <div className="tcard"><strong>Water: 3-3.5 litres per day</strong>Especially for fatty liver and cholesterol. 500ml warm water every morning. 300ml before each meal reduces appetite by 15-20%.</div>
          <div className="tcard"><strong>Sleep 7-8 hours minimum</strong>Poor sleep raises cortisol (belly fat), raises ghrelin (hunger), and reduces muscle recovery by 40%. Sleep is your fat burning and muscle building time.</div>
          <div className="tcard"><strong>Weigh food RAW always</strong>Cooked weight varies wildly. Raw weight is consistent and accurate. Your plan already uses raw weights - keep this habit forever.</div>
          <div className="tcard"><strong>Push steps to 9-10k per day</strong>2,000 extra steps = 90 kcal per day = 3 kg extra fat loss per year passively. Dramatically improves insulin sensitivity for pre-diabetic control.</div>
          <div className="tcard"><strong>Shoulder rehab every session</strong>Face pulls and band external rotations every workout. These rebuild the rotator cuff. See a physio if pain persists past 3 weeks. Never train through sharp pain.</div>
        </div>
      </div>
    </>
  );
}
