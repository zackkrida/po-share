import { useState, useEffect } from 'react'

export const TextInput = ({ label, ...props }: TextInputProps) => {
  let [type, setType] = useState<HTMLInputElement['type']>('text')

  useEffect(() => {
    if (props.type) setType(props.type)
  }, [props.type])

  return (
    <label>
      <span>{label}</span>
      <input {...props} type={type} />

      {/* Allow show/hide of password fields :) Love this feature */}
      {props.type === 'password' && (
        <span
          title="Reveal password"
          className="passwordIcon"
          onClick={() =>
            type === 'password' ? setType('text') : setType('password')
          }
        >
          {type === 'text' ? (
            <svg viewBox="0 0 54.306 54.306">
              <path
                d="M27.153,13.141c-10.371,0-19.419,5.638-24.265,14.012c4.846,8.374,13.894,14.012,24.265,14.012
			s19.419-5.638,24.265-14.012C46.572,18.779,37.524,13.141,27.153,13.141z"
              />
              <path
                d="M27.153,43.665c-10.854,0-20.981-5.848-26.428-15.26L0,27.153l0.724-1.252
			c5.447-9.413,15.574-15.26,26.429-15.26c10.854,0,20.981,5.847,26.429,15.26l0.725,1.252l-0.725,1.252
			C48.134,37.818,38.007,43.665,27.153,43.665z M5.826,27.153c4.701,7.136,12.743,11.512,21.327,11.512
			c8.585,0,16.626-4.376,21.327-11.512c-4.701-7.136-12.742-11.512-21.327-11.512S10.527,20.017,5.826,27.153z"
              />
              <circle cx="28.076" cy="26.343" r="12.188" />
              <path
                d="M28.076,41.031c-8.099,0-14.688-6.589-14.688-14.688c0-8.099,6.589-14.688,14.688-14.688
			s14.688,6.589,14.688,14.688C42.764,34.442,36.175,41.031,28.076,41.031z M28.076,16.655c-5.342,0-9.688,4.346-9.688,9.688
			s4.346,9.688,9.688,9.688c5.342,0,9.688-4.346,9.688-9.688S33.418,16.655,28.076,16.655z"
              />
              <circle cx="33.513" cy="22.516" r="5.375" />
            </svg>
          ) : (
            <svg viewBox="0 0 54.306 54.306">
              <path
                d="M53.583,25.902c-5.447-9.413-15.574-15.26-26.429-15.26S6.173,16.489,0.725,25.902L0,27.154
		l0.725,1.252c5.447,9.413,15.574,15.26,26.429,15.26s20.981-5.847,26.429-15.26l0.725-1.252L53.583,25.902z M27.425,36.032
		c-5.342,0-9.688-4.346-9.688-9.688s4.346-9.688,9.688-9.688s9.688,4.346,9.688,9.688S32.767,36.032,27.425,36.032z M5.826,27.154
		c2.304-3.497,5.412-6.325,8.99-8.306c-1.312,2.198-2.08,4.756-2.08,7.496c0,3.911,1.546,7.459,4.046,10.094
		C12.377,34.469,8.542,31.276,5.826,27.154z M38.479,35.985c2.256-2.583,3.634-5.95,3.634-9.641c0-2.537-0.646-4.925-1.783-7.009
		c3.225,1.948,6.03,4.599,8.151,7.819C45.964,30.975,42.483,33.995,38.479,35.985z"
              />
            </svg>
          )}
        </span>
      )}

      <style jsx>{`
        label {
          display: block;
          position: relative;
        }

        span {
          display: block;
          margin-bottom: 0.5em;
        }

        input {
          border-style: solid;
          padding: 1em;
          display: block;
          width: 100%;
          padding-right: ${props.type === 'password' ? '3em' : '1em'};
        }

        input:hover,
        input:focus {
          outline: 0;
          border-color: var(--color-dark);
        }

        .passwordIcon {
          cursor: pointer;
          width: 2rem;
          padding: 0.25rem;
          position: absolute;
          right: 0.5em;
          top: 50%;
        }
      `}</style>
    </label>
  )
}

interface TextInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'label'> {
  label: React.ReactNode
}
